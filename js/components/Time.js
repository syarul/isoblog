import React from 'react';

import TimeStore from '../stores/TimeStore';

export default class Time extends React.Component {

    constructor() {
        super();
        this.state = TimeStore.getState();
    }

    render() {
        return <div>The time is now: {this.state.time}</div>
    }
};
