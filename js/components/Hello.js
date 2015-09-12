import React from 'react';

import HelloStore from '../stores/HelloStore';

export default class Hello extends React.Component {

    constructor() {
        super();
        this.state = HelloStore.getState();
    }

    render() {
        return <div> Hello, {this.state.name} </div>
  }
};
