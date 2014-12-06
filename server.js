// Module dependencies
var express  = require('express'),
    mongoose = require('mongoose'),
    routes   = require('./routes'),
    api      = require('./routes/api'),
    connect  = require('connect'),
    http     = require('http'),
    bodyParser = require('body-parser'),
    methodOverride = require('method-override'),
    path     = require('path');

var server = module.exports = express();
server.engine('html', require('ejs').renderFile);

// Configuration
server.set('port', process.env.PORT || 8080);
server.set('views', __dirname + '/views');
server.set('view engine', 'html');

server.use(express.logger('dev'));
server.use('/public', express.static(path.join(__dirname, 'public')));

server.use(bodyParser());
server.use(methodOverride());
server.use(server.router);

// dev only
if(server.get('env') == 'development')
  server.use(express.errorHandler());

// Routes
server.get('/',  routes.index);
server.get('/partials/:name', routes.partials);
server.get('/order', api.order);
server.post('/new', api.newItem);

// Start server
http.createServer(server).listen(server.get('port'), function () {
  console.log('Server listening on port ' + server.get('port'));
});