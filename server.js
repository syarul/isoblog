let express = require('express');
let path = require('path');
let React = require('react');
let Iso = require('iso');
let Router = require('react-router');

let falcorExpress = require('falcor-express');
let falcorRouter = require('falcor-router');

let routes = require('./js/routes')
let alt = require('./js/alt')

let app = express();

app.use('/model.json', falcorExpress.dataSourceRoute(function (req, res) {
  // create a Virtual JSON resource with single key ("greeting")
  return new falcorRouter([
    {
      // match a request for the key "greeting"    
      route: "greeting",
      // respond with a PathValue with the value of "Hello World."
      get: function() {
        return {path:["greeting"], value: "Hello World"};
      }
    }
  ]);
}));

// This is express boilerplate to make our bundled JS available as well
// as our template
app.set('view engine', 'jade')
app.set('views', path.join(__dirname, 'templates'))
app.use('/dist', express.static(path.join(__dirname, 'dist')))
//app.use(express.static(__dirname + '/'));

// Simulate an asynchronous event that takes 200ms to complete
function getNameFromServer(cb) {
  setTimeout(function () {
    cb('Server')
  }, 0)
}

// Prior to running react-router we setup this route in order to handle data
// fetching. We can pass data fetched via express' locals.
app.get('/hello/:name?', function (req, res, next) {
  if (req.params.name) {
    res.locals.data = { HelloStore: { name: req.params.name } }
    next()
  } else {
    getNameFromServer(function (name) {
      res.locals.data = {
        HelloStore: { name: name }
      }
      next()
    })
  }
})

app.get('/time', function (req, res, next) {
  res.locals.data = {
    TimeStore: { time: Date.now() }
  }
  next()
})

// This is where the magic happens, we take the locals data we have already
// fetched and seed our stores with data.
// Next we use react-router to run the URL that is provided in routes.jsx
// Finally we use iso in order to render this content so it picks back up
// on the client side and bootstraps the stores.
app.use(function (req, res) {
  alt.bootstrap(JSON.stringify(res.locals.data || {}))

  var iso = new Iso()

  Router.run(routes, req.url, function (Handler) {
    var content = React.renderToString(React.createElement(Handler))
    iso.add(content, alt.flush())

    res.render('layout', {
      html: iso.render()
    })
  })
})

// Handle 500
app.use((error, req, res, next) => {
    res.status(500).send('500: Internal Server Error');
});

app.set('port', process.env.OPENSHIFT_NODEJS_PORT || process.env.PORT || 8080);
app.set('ip', process.env.OPENSHIFT_NODEJS_IP || "127.0.0.1");

//var node_env = process.env.NODE_ENV;
 
var server = app.listen(app.get('port') ,app.get('ip'), function () {
  console.log("✔ Express server listening at %s:%d ", app.get('ip'),app.get('port'));
});

module.exports = server;