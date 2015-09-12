'use strict';
import React from 'react';
import CounterStore from '../stores/CounterStore';
import TodoActions from '../actions/TodoActions';
import { RouteHandler, Link } from 'react-router';

export default class App extends React.Component {

    _bind(...methods) {
        methods.forEach((method) => this[method] = this[method].bind(this));
    }

    constructor() {
        super();
        this.state = CounterStore.getState();

        var m = ['_onCounterClicked', '_onChange'];
        for (var i =0; i < m.length; i++) {
            this._bind(m[i], m[i]);
        };
    }

    componentDidMount() {
        CounterStore.listen(this._onChange);
    }

    componentWillUnmount() {
        CounterStore.unlisten(this._onChange);
    }

    _onChange() {
        this.setState({
            count: CounterStore.getState().count,
            falcorGreet: CounterStore.getState().falcorGreet
        });
    }

    render() {
        //console.log(this.state)
        return (

          <div>
            <Link to='hello'>Say hi</Link>
            <br />
            <Link to='time'>What time is it?</Link>
            <br />
            <Link to='todo'>Todo Task</Link>
            <br />
            <RouteHandler 
                {...this.props} 
                counter = {this.state.count} 
                onCounterClicked={this._onCounterClicked}
                falcorGreet = {this.state.falcorGreet} 
            />
          </div>
        )
    }

    _onCounterClicked() {
        TodoActions.actionClicked();
        TodoActions.getFalcor();
    }
}
