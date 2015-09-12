var Iso = require('iso');

var Router = require('react-router');
var React = require('react');

var routes = require('./routes');

var alt = require('./alt');

//var Flux = require('./flux');
//var flux = new Flux();

// Once we bootstrap the stores, we run react-router using
// Router.HistoryLocation
// the element is created and we just render it into the container
// and our application is now live
Iso.bootstrap(function (state, _, container) {
  alt.bootstrap(state);

  Router.run(routes, Router.HistoryLocation, function (Handler) {
    var node = React.createElement(Handler)
    React.render(node, container)
  })
})