export default class MultiLangString {
  constructor(data = {}) {

    // VALIDATION FOR SETTERS
    const handler = {
      get(target, prop) {
        if (target[prop] instanceof Function) return target[prop].bind(target);
        return target.has(prop) ? target.get(prop) : target[prop];
      },
      set(target, prop, val) {
        validateKey(prop);
        validateString(val);
        return target.set(prop, val);
      },
    };

    return new Proxy(this, handler);

  }

}
