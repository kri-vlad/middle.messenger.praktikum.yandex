const METHODS = {
  GET: 'GET',
  PUT: 'PUT',
  POST: 'POST',
  DELETE: 'DELETE'
};

function queryStringify(obj = {}) {
  const parameters = [];
  for (const [key, value] of Object.entries(obj)) {
    parameters.push(`${key}=${value}`);
  }
  return parameters.length ? `?${parameters.join('&')}` : '';
}

class HTTPTransport {
  get = (
    url: string,
    options?: {
      method?: 'GET' | 'POST' | 'PUT' | 'DELETE';
      queryStringParams?: Record<string, string>;
      headers?: Record<string, string>;
    },
    timeout?: number,
  ): Promise<Response> => {
    return this.request(url, options, timeout);
  };

  post = (
    url: string,
    options: {
      queryStringParams?: Record<string, string>;
      body?: Document | BodyInit | null | undefined;
      headers?: Record<string, string>;
    },
    timeout?: number,
  ): Promise<Response> => {
    return this.request(url, { ...options, method: METHODS.POST}, timeout);
  };

  put = (
    url: string,
    options: {
      queryStringParams?: Record<string, string>;
      body?: Document | BodyInit | null | undefined;
      headers?: Record<string, string>;
    },
    timeout?: number,
  ): Promise<Response> => {
    return this.request(url, { ...options, method: METHODS.PUT}, timeout);
  };

  delete = (
    url: string,
    options: {
      queryStringParams?: Record<string, string>;
      body?: Document | BodyInit | null | undefined;
      headers?: Record<string, string>;
    },
    timeout?: number,
  ): Promise<Response> => {
    return this.request(url, { ...options, method: METHODS.DELETE}, timeout);
  };

  request = (
    url: string,
    options: {
      method?: string;
      queryStringParams?: Record<string, string>;
      body?: Document | BodyInit | null | undefined;
      headers?: Record<string, string>;
    },
    timeout?: number
  ): Promise<Response> => {
    const {
      method = METHODS.GET,
      body = null,
      queryStringParams = {},
      headers = {}
    } = options;

    return new Promise((resolve, reject) => {
      try {
        const xhr = new XMLHttpRequest();

        xhr.open(method, `${url}${queryStringify(queryStringParams)}`);
        xhr.timeout = timeout || 2000;

        const requestHeaders: Record<string, string> = {
          'Content-Type': 'application/json; charset=utf-8',
          ...headers
        };

        for (const [headerName, headerValue] of Object.entries(requestHeaders)) {
          xhr.setRequestHeader(headerName, headerValue);
        }

        xhr.onload = function () {
          if (xhr.status === 200) {
            resolve(new Response(xhr.response));
          }

          reject({
            status: xhr.status,
            response: xhr.response,
            responseText: xhr.responseText,
          });
        }

        xhr.onerror = function () {
          reject(new Response(null, {
            status: xhr.status,
            statusText: xhr.statusText
          }));
        }

        xhr.ontimeout = function () {
          reject(new Response(null, {
            status: xhr.status,
            statusText: xhr.statusText
          }));
        }

        if (method === 'GET') {
          xhr.send();
        } else {
          xhr.send(body);
        }
      } catch (err) {
        reject(new Response(
          err.toString(),
          {
            status: 450,
            statusText: "Client error"
          }
        ))
      }
    })
  };
}

async function fetchWithRetry(
  url: string,
  body,
  options: {tries?: number} = {}
): Promise<Response> {
  const transport = new HTTPTransport();

  const onError = (err: Promise<Response> | Error) => {
    const tries: number = options?.tries || 5;
    const triesLeft = tries - 1;
    if (!triesLeft){
      throw err;
    }
    return fetchWithRetry(url, {...options, tries: triesLeft});
  }

  return transport
    .get(url)
    .catch(onError);
}


export default HTTPTransport;
