'use strict'

var React = require('react')
var Route = require('react-router').Route;
var NotFoundRoute = require('react-router').NotFoundRoute;

var App = require('./components/App');
var Main = require('./components/Main');
var Hello = require('./components/Hello');
var Time = require('./components/Time');
var NotFound = require('./components/NotFound');
var TodoList = require('./components/TodoList');

var routes = (
  <Route name='home' path='/' handler={App}>
  	<Route name='main' path='/' handler={Main} />
    <Route name='hello' path='/hello/:name?' handler={Hello} />
    <Route name='time' path='/time' handler={Time} />
    <Route name='todo' path='/todo' handler={TodoList} />
    <NotFoundRoute handler={NotFound} />

  </Route>
)

module.exports = routes