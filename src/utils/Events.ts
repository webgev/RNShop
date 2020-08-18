const EVENTS: any = {};

export class EventRegister {
  static on = (eventName: string, handler: any) => {
    if (!EVENTS[eventName]) {
      EVENTS[eventName] = [];
    }
    EVENTS[eventName].push(handler);
    return () => {
      EVENTS[eventName] = EVENTS[eventName].filter((item: any) => {
        return item !== handler;
      });
    };
  };

  static emit = (eventName: string, data?: any) => {
    if (EVENTS[eventName]) {
      for (let handler of EVENTS[eventName]) {
        handler(data);
      }
    }
  };
}
