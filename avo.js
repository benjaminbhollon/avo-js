const initial = {
  callback: () => {},
  internalValue: undefined,
  set value(value) {
    this.internalValue = value;
    this.callback();
  },
  get value() {
    return this.internalValue;
  },
  bind: function bind(callback) {
    if (typeof callback !== 'function') throw `Uncaught TypeError: Callback is not a function`;
    this.callback = callback;
  }
};
let vars = {};

function avo(varName) {
  if (typeof varName !== 'string' || varName.length === 0) throw `Invalid varName "${varName}"`;
  if (vars[varName] === undefined) vars[varName] = initial;

  return vars[varName];
}
