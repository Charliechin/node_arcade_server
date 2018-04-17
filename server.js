var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    path = require('path');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));

app.get('/index', function(req,res,next){
  //index_template = "<link rel='stylesheet' href='https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css' integrity='sha384-BVYiiSIFek1dGmJRAkycuHAHRg320mUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u' crossorigin='anonymous'> <a href='/start' class='btn btn-warning'> Start </a>"
  //res.send(index_template);
  res.sendFile(path.join(__dirname+'/index.html'));
  //res.send("<a href='/start'> Start Emulator </a> <br/><br/>  <a href='/contra'> Launch Contra </a> <br/> <a href='/tetris'> Launch Tetris </a> <br/><br/> <a href='/stop'> Stop</a>  <br/><br/><a href='https://cloud.arest.io/piarcade/digital/2/1'> RED LED ON </a> <a href='https://cloud.arest.io/piarcade/digital/2/0'> RED LED OFF </a>  <br/><br/><a href='https://cloud.arest.io/piarcade/digital/3/1'> GREEN LED ON </a> <a href='https://cloud.arest.io/piarcade/digital/3/0'> GREEN LED OFF </a> <br/><br/><a href='https://cloud.arest.io/piarcade/digital/4/1'> BLUE LED ON </a> <a href='https://cloud.arest.io/piarcade/digital/4/0'> BLUE LED OFF </a> ");
});
app.get('/contra', function(req,res,next){
  var sys = require('util'),
  exec = require('child_process').exec,
  child;

  child = exec('sh commands/contra.sh', function(error, stdout, stderr) {
    if(error) {
      return next(error);
    }
    return res.status(200).send(stdout);
  });
});
app.get('/simpsons', function(req,res,next){
  var sys = require('util'),
  exec = require('child_process').exec,
  child;

  child = exec('sh commands/simpsons.sh', function(error, stdout, stderr) {
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

  child = exec('sh commands/tetris.sh', function(error, stdout, stderr) {
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

  child = exec('sh commands/start.sh', function(error, stdout, stderr) {
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

  child = exec('sh commands/stop.sh', function(error, stdout, stderr) {
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
