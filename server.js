var path = require('path');
var express = require('express');
var webpack = require('webpack');
var proxy = require('http-proxy-middleware');
var open = require('open');
var config = require('./webpack.config');
var app = express();
var compiler = webpack(config);
var port = 3001;

var hostProxy = proxy({
  target: 'http://localhost/mockjsdata/3',
  changeOrigin: true,
  logLevel: 'debug'
});

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath,
  hot: true,
  stats: { colors: true }
}));

app.use(require('webpack-hot-middleware')(compiler));

app.get("/", function(req, res) {
  res.sendFile(__dirname + '/index.template.html')
})

// app.use('*', hostProxy);

app.listen(port, function(error) {
  if (error) {
    console.error(error)
  } else {
    console.info("==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.", port, port)
  }
})
