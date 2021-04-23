class FormValidator {
  private _issues: Record<string, Array<string>>;
  private formData: FormData;
  private form: HTMLFormElement;
  private successHandler: () => void | null;
  private errorHandler: (err) => void | null;

  constructor(
    form: HTMLFormElement,
    successHandler: null | (() => void),
    errorHandler: null | ((...args) => void)
  ) {
    this._issues = {};
    this.form = form;
    this.formData = null;
    this.successHandler = successHandler || null;
    this.errorHandler = errorHandler || null;
  }

  get issues(): Record<string, Array<string>> {
    return this._issues;
  }

  init = (): void => {
    this.formData = new FormData(this.form);

    this.form.classList.add('validator');

    this.formData.forEach((fieldValue, fieldName) => {
      const input = this.form.querySelector(`input[name=${fieldName}]`);
      const handler : ((e) => boolean) = this.validateFormData;
      input.addEventListener("focus", handler);
      input.addEventListener("blur", handler);
    });
    this.form.addEventListener("submit", this.validate);
  }

  destroy(): void {
    const validate = this.validate;
    this.form.removeEventListener("submit", validate);

    const handler : ((e) => boolean) = this.validateFormData;

    this.formData.forEach((fieldValue, fieldName) => {
      const input = this.form.querySelector(`input[name=${fieldName}]`);
      input.removeEventListener("focus", handler)
      input.removeEventListener("blur", handler)
    })
  }

  validate = (e: Event | FormData) => {
    let result = false;
    const validateFormData = this.validateFormData;

    if (e instanceof Event) {
      e.preventDefault();
      this.formData = new FormData(this.form);
      result = validateFormData(this.formData);
    }

    if (e instanceof FormData) {
      result = validateFormData(e);
    }

    if (!result && this.errorHandler) {
      this.errorHandler(this.issues);
    } else if (this.successHandler) {
      this.successHandler();
    }
  }

  validateFormData = (e) => {
    const formData = new FormData(this.form);
    this.form.classList.add("was-validated");
    this._issues = {};
    const inputs = this.form.querySelectorAll("input");
    inputs.forEach((input) => {
      input.classList.remove("error");
    })

    const _formFieldsData = [];

    formData.forEach((fieldValue, fieldName) => {
      switch (fieldName) {
        case 'login': {
          const loginCheck = this.loginCheck(fieldValue);
          if (loginCheck.length) this.addIssues('login', loginCheck);
          _formFieldsData.push({ fieldName, fieldValue, issues: loginCheck });
          break;
        }
        case 'email': {
          const emailCheck = this.emailCheck(fieldValue);
          if (emailCheck.length) this.addIssues('email', emailCheck);
          _formFieldsData.push({ fieldName, fieldValue, issues: emailCheck });
          break;
        }
        case 'password': {
          const passwordCheck = this.passwordCheck(fieldValue);
          if (passwordCheck.length) this.addIssues('password', passwordCheck);
          _formFieldsData.push({ fieldName, fieldValue, issues: passwordCheck });
          break;
        }
        case 'password_second': {
          const passwordSecondCheck = this.passwordSecondCheck(fieldValue, formData.get('password'));
          if (passwordSecondCheck.length) this.addIssues('password_second', passwordSecondCheck);
          _formFieldsData.push({ fieldName, fieldValue, issues: passwordSecondCheck });
          break;
        }
        default: {
          const baseFieldsCheck = this.baseFieldsCheck(fieldValue);
          _formFieldsData.push({ fieldName, fieldValue, issues: baseFieldsCheck });
          if (baseFieldsCheck.length) this.addIssues(fieldName, baseFieldsCheck);
        }
      }
    })
    return !Object.keys(this.issues).length;
  }

  isRequired(fieldValue) {
    return fieldValue.length === 0
  }

  isMaxLength(fieldValue, maxLength) {
    return fieldValue.length >= maxLength + 1
  }

  baseFieldsCheck(fieldValue) {
    const issues = [];

    if (this.isRequired(fieldValue)) {
      issues.push('Is required');
    }

    return issues;
  }

  appendFormData(name, value) {
    this.formData.append(name, value);
  }

  loginCheck(fieldValue) {
      const issues = [];

      if (this.isRequired(fieldValue)) {
        issues.push('Login is required');
      }

      if (this.isMaxLength(fieldValue, 10)) {
        issues.push('Login max length is 10');
      }

      return issues;
  }

  emailCheck(fieldValue) {
    const issues = [];

    if (this.isRequired(fieldValue)) {
      issues.push('Email is required');
    }

    if (this.isMaxLength(fieldValue, 24)) {
      issues.push('Email max length is 24');
    }

    return issues;
  }

  passwordCheck(fieldValue) {
    const issues = [];

    if (this.isRequired(fieldValue)) {
      issues.push('Password is required');
    }

    if (this.isMaxLength(fieldValue, 10)) {
      issues.push('Password max length is 10');
    }

    return issues;
  }

  passwordSecondCheck(password, passwordRepeat): string[] {
    const issues = [];

    if (this.isRequired(passwordRepeat)) {
      issues.push('Second is required');
    }

    if (password !== passwordRepeat) {
      issues.push("Passwords isn't match");
    }

    return issues;
  }

  addIssues = (fieldName: string, issues): void => {
    if (!this.issues[fieldName]) {
      this.issues[fieldName] = [];
    }
    this.issues[fieldName].push(issues);
    const input = this.form.querySelector(`input[name=${fieldName}]`);
    if (input) {
      input.classList.add("error");
    }
  }

  getIsValid(): boolean {
    return !Object.keys(this.issues).length;
  }

  removeListener(listener) {
    document.removeEventListener('submit', listener, false);
  }
}

export default FormValidator
