class EventBus {
  private readonly listeners: Record<string, Array<((...args)=>void)>>;
  constructor() {
    this.listeners = {};
  }

  on(event: string, callback: (() => void)): void {
    if (!this.listeners[event]) {
      this.listeners[event] = [];
    }

    this.listeners[event].push(callback);
  }

  off(event: string, callback: (() => void)): void {
    if (!this.listeners[event]) {
      throw new Error(`Нет события: ${event}`);
    }

    this.listeners[event] = this.listeners[event].filter(
      listener => listener !== callback
    );
  }

  emit(event: string, ...args): void {
    if (!this.listeners[event]) {
      throw new Error(`Нет события: ${event}`);
    }

    this.listeners[event].forEach(function(listener) {
      listener(...args);
    });
  }
}

export default EventBus
