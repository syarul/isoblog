import alt from '../alt';

let falcor =require('falcor');

import HttpDataSource from 'falcor-http-datasource';

var falcorAPI = require('../api/falcorAPI');

class TodoActions {
	
    constructor() {

        this.generateActions(
            'actionClicked',
            'addTodo',
            'loadFalcorData'
        );
    }
    updateTodo(count) {
        this.dispatch(count);
    }

    getFalcor(){
        var that = this;
        var model = new falcor.Model({
            source: new HttpDataSource('/model.json')
            /*
            cache: {
                todos: {
                    length: 10,
                    0: {
                        name: 'get milk from corner store',
                        done: false
                    },
                    1: {
                        name: 'take a dump',
                        done: true
                    },
                    2: {
                        name: 'eat a dump',
                        done: false
                    }
                }
            }*/
        });

      // retrieve the "greeting" key from the root of the Virtual JSON resource
        model.
        get("greeting").
        then(function(response) {
            //console.log(response.json.greeting);
            that.alt.getActions('TodoActions').loadFalcorData(response.json.greeting);
        });
    }

}

export default alt.createActions(TodoActions);