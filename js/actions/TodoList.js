import UUID        from 'node-uuid';
import Immutable   from 'immutable';
import alt from '../alt';

class TodoListActions {
	
  addTask(content) { 
  	this.dispatch(Immutable.fromJS({ id: UUID.v4(), content })); 
  }

  removeTask(taskID) { 
  	this.dispatch(taskID); 
  }
}

export default alt.createActions(TodoListActions);