import Store from './Store';

export default class Component {
  constructor(store) {
    if (store) {
      this.store = store;
    } else {
      this.store = new Store();
    }

    if(this.__proto__.render) {
      let child = {
        render: this.__proto__.render(),
        context: this
      };
      this._render(child);
    }
  }

  _render(elem){
    document.body.innerHTML = elem.render;    
  }
}