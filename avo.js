const avoD = {
  callback: () => {},
  internalValue: undefined,
  set value(v) {
    this.internalValue = v;
    this.callback();
  },
  get value() {
    return this.internalValue;
  },
  bind: function bind(c) {
    if (typeof c !== 'function') throw `TypeError: callback is not a function`;
    this.callback = c;
  }
};
let avoV = {};

function avo(v) {
  if (typeof v !== 'string') throw `Invalid varName "${v}"`;
  if (avoV[v] === undefined) avoV[v] = avoD;

  return avoV[v];
}

if (typeof module !== 'undefined' && module.exports) module.exports = avo;
