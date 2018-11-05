export default BaseClass =>
  class extends BaseClass {
    constructor() {
      super();

      const methods = Object.getOwnPropertyNames(this.constructor.prototype)
        .filter(prop => typeof this[prop] === "function")
        .filter(prop => prop.match(/^(on|render).+/g));

      if (methods.length > 0) {
        this.bindAll(...methods);
      }
    }

    bindAll(...props) {
      for (let i = 0, p; (p = props[i]); i++) {
        this[p] = this[p].bind(this);
      }
    }
  };
