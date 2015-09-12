import alt from '../alt';
import TodoActions from '../actions/TodoActions';

class CounterStore {
    constructor() {

        this.count = 123;

        this.falcorGreet = 'nothing';

        this.bindActions(TodoActions);

        //this.bindListeners({
        //    updateTodo: TodoActions.UPDATE_TODO
        //});

    }
    updateTodo(c){
        //
    }

    onActionClicked() {
        this.count++;
        this.emitChange();
    }
    getCounter() {
        return this.count;
    }
    onLoadFalcorData(arr){
        this.falcorGreet = arr;
    }
}

export default alt.createStore(CounterStore, 'CounterStore')