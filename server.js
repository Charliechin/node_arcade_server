var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    path = require('path');

app.use(express.static('./'));

// I had to comment this in order for the view template engine to work
//app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({extended : true}));

app.get('/', function(req,res,next){
  res.render('index.html');
  //res.send("<a href='/start'> Start Emulator </a> <br/><br/>  <a href='/contra'> Launch Contra </a> <br/> <a href='/tetris'> Launch Tetris </a> <br/><br/> <a href='/stop'> Stop</a>  <br/><br/><a href='https://cloud.arest.io/piarcade/digital/2/1'> RED LED ON </a> <a href='https://cloud.arest.io/piarcade/digital/2/0'> RED LED OFF </a>  <br/><br/><a href='https://cloud.arest.io/piarcade/digital/3/1'> GREEN LED ON </a> <a href='https://cloud.arest.io/piarcade/digital/3/0'> GREEN LED OFF </a> <br/><br/><a href='https://cloud.arest.io/piarcade/digital/4/1'> BLUE LED ON </a> <a href='https://cloud.arest.io/piarcade/digital/4/0'> BLUE LED OFF </a> ");
});
// Games
//Arcade
app.get('/pang', function(req,res,next){
  var sys = require('util'),
  exec = require('child_process').exec,
  child;

  child = exec('sh commands/pang.sh', function(error, stdout, stderr) {
    if(error) {
      return next(error);
    }
    return res.status(200).send(stdout);
  });
});
app.get('/tmnt', function(req,res,next){
  var sys = require('util'),
  exec = require('child_process').exec,
  child;

  child = exec('sh commands/tmnt.sh', function(error, stdout, stderr) {
    if(error) {
      return next(error);
    }
    return res.status(200).send(stdout);
  });
});
app.get('/mortal-kombat-3', function(req,res,next){
  var sys = require('util'),
  exec = require('child_process').exec,
  child;

  child = exec('sh commands/mortal-kombat-3.sh', function(error, stdout, stderr) {
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
//Nes
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
//Gameboy
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
//System related
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
app.get('/mute', function(req,res,next){
  var sys = require('util'),
  exec = require('child_process').exec,
  child;

  child = exec('sh commands/mute.sh', function(error, stdout, stderr) {
    if(error) {
      return next(error);
    }
    return res.status(200).send(stdout);
  });
});
app.get('/volume-up', function(req,res,next){
  var sys = require('util'),
  exec = require('child_process').exec,
  child;

  child = exec('sh commands/volume-up.sh', function(error, stdout, stderr) {
    if(error) {
      return next(error);
    }
    return res.status(200).send(stdout);
  });
});
app.get('/volume-down', function(req,res,next){
  var sys = require('util'),
  exec = require('child_process').exec,
  child;

  child = exec('sh commands/volume-down.sh', function(error, stdout, stderr) {
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
