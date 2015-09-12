import alt from '../alt';

function TimeStore() {
  this.time = Date.now()
}

export default alt.createStore(TimeStore, 'TimeStore')
