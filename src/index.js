import Store from './Store';
import Component from './Component';
var store = new Store();

class Form extends Component {
  constructor(store){
    super(store);

    this.store = store;
    this.didMount();
  }

  didMount() {
    store.setState(
      { 
        username: '',
        password: ''
      }
    )
  }

  render() {
    console.log(store.getState());
      return `<form>
        <input type="text" />
      </form>`;
  }
}

var form = new Form(store);
