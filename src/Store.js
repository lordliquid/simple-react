let map = new WeakMap();

let internal = function (object) {
  if (!map.has(object)) {
    map.set(object, {});
  }
  return map.get(object);
};

export default class Store {
  constructor() {
    let hist = [];
    let state = {};
    this.count = 0;
    internal(this).hist = hist;
    internal(this).state = state;
  }
};
  
Store.prototype.setState = function (obj) {
  if(typeof obj !== 'object'){
    console.error('.setState() expects an object and instead received ' + typeof obj + ' type.');
    return this;
  }

  for(var o in obj){
    this.count++;
    internal(this).state[o] = obj[o];
  }

  return obj;
}

Store.prototype.getState = function () {
  return internal(this).state;
}

Store.prototype.saveStateHistory = function () {
  let state = Object.assign({...internal(this).state, date: Date()});
  internal(this).hist.push(state);
  return internal(this).hist;
}

Store.prototype.getStateHistory = function () {
  return internal(this).hist;
}
