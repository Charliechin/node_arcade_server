var express = require('express'),
  app = express(),
  bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));

app.get('/index', function(req,res,next){
  //index_template = "<link rel='stylesheet' href='https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css' integrity='sha384-BVYiiSIFek1dGmJRAkycuHAHRg320mUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u' crossorigin='anonymous'> <a href='/start' class='btn btn-warning'> Start </a>"
  //res.send(index_template);
  res.send("<a href='/start'> Start Emulator </a> <br/><br/>  <a href='/contra'> Launch Contra </a> <br/> <a href='/tetris'> Launch Tetris </a> <br/><br/> <a href='/stop'> Stop</a> ");
});
app.get('/contra', function(req,res,next){
  var sys = require('util'),
    exec = require('child_process').exec,
    child;

  child = exec('sh contra.sh', function(error, stdout, stderr) {
    if(error) {
      return next(error);
    }
    return res.status(200).send(stdout);
  });
});
app.get('/tetris', function(req,res,next){
  var sys = require('util'),
    exec = require('child_process').exec,
    child;

  child = exec('sh tetris.sh', function(error, stdout, stderr) {
    if(error) {
      return next(error);
    }
    return res.status(200).send(stdout);
  });
});
app.get('/start', function(req,res,next){
  var sys = require('util'),
    exec = require('child_process').exec,
    child;

  child = exec('sh start.sh', function(error, stdout, stderr) {
    if(error) {
      return next(error);
    }
    return res.status(200).send(stdout);
  });
});
app.get('/stop', function(req,res,next){
  var sys = require('util'),
    exec = require('child_process').exec,
    child;

  child = exec('sh stop.sh', function(error, stdout, stderr) {
    if(error) {
      return next(error);
    }
    return res.status(200).send(stdout);
  });
});
app.use(function(error, req, res, next) {
  return res.send(500, error);
});
app.listen(8080);
console.log('App listening on port 8080');
