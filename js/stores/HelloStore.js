import alt from '../alt';

function HelloStore() {
  this.name = 'Nobody'
}

export default alt.createStore(HelloStore, 'HelloStore')
