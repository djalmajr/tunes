// https://github.com/kenchris/lit-element

function attachProperty(prototype, prop, options) {
  const { attr, computed, type: ctor } = options;

  function get() {
    return (this.__values || {})[prop];
  }

  function set(v) {
    let value = v === null || v === undefined ? v : ctor === Array ? v : ctor(v);

    this._setPropertyValue(prop, value);

    if (attr) {
      this._setAttributeValue(attr, value, ctor);
    }

    this.invalidate();
  }

  Object.defineProperty(prototype, prop, computed ? { get } : { get, set });
}

export default BaseClass =>
  class extends BaseClass {
    static get properties() {
      return {};
    }

    static get observedAttributes() {
      return Object.keys(this.properties)
        .map(key => this.properties[key].attr)
        .filter(name => name);
    }

    constructor() {
      super();

      this.__deps = {};
      this.__values = {};
      this.__attrMap = {};
      this.__listeners = {};
      this.__lookupCache = {};

      for (const prop in this.constructor.properties) {
        const options = this.constructor.properties[prop];
        const { value, attr, computed } = options;
        const matchComputed = /(\w+)\((.+)\)/.exec(computed);

        attachProperty(this, prop, options);

        if (typeof attr === "string" && attr.trim()) {
          this.__attrMap[attr] = prop;
        }

        if (!attr && value !== undefined) {
          this._setPropertyValue(prop, value);
        }

        if (matchComputed) {
          const fnName = matchComputed[1];
          const targets = matchComputed[2].split(/,\s*/);
          const computeFn = () => {
            const values = targets.map(target => this[target]);

            if (this[fnName] && values.every(entry => entry !== undefined)) {
              const computedValue = this[fnName](...values);
              this._setPropertyValue(prop, computedValue);
            }
          };

          for (const target of targets) {
            if (!this.__deps[target]) {
              this.__deps[target] = [computeFn];
            } else {
              this.__deps[target].push(computeFn);
            }
          }

          computeFn();
        }
      }
    }

    connectedCallback() {
      super.connectedCallback && super.connectedCallback();

      for (const attr of this.constructor.observedAttributes) {
        this._setPropertyValueFromAttributeValue(attr, this.getAttribute(attr));
      }
    }

    attributeChangedCallback(attr, old, val) {
      super.attributeChangedCallback && super.attributeChangedCallback(attr, old, val);
      this._setPropertyValueFromAttributeValue(attr, val);
      this.invalidate();
    }

    async invalidate() {
      if (!this.__needsRender) {
        this.__needsRender = true;
        // Schedule the following as micro task, which runs before requestAnimationFrame.
        // All additional invalidate() calls before will be ignored.
        // https://jakearchibald.com/2015/tasks-microtasks-queues-and-schedules/
        this.__needsRender = await false;
        this.render();
      }
    }

    _setPropertyValue(prop, value) {
      this.__values[prop] = value;

      if (this.__deps[prop]) {
        this.__deps[prop].forEach(fn => fn());
      }
    }

    _setPropertyValueFromAttributeValue(attr, val) {
      const prop = this.__attrMap[attr];
      const { type: ctor } = this.constructor.properties[prop] || {};

      if (ctor) {
        const value = (() => {
          if (ctor.name === "Boolean") {
            return val === "" || (!!val && val === attr.toLowerCase());
          }

          return val !== null ? ctor(val) : undefined;
        })();

        this._setPropertyValue(prop, value);
      }
    }

    _setAttributeValue(attr, value, ctor) {
      if (ctor.name === "Boolean") {
        if (!value) {
          this.removeAttribute(attr);
        } else {
          this.setAttribute(attr, "");
        }
      } else {
        this.setAttribute(attr, value);
      }
    }
  };
