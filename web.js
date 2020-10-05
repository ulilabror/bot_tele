var express = require('express');
var packageInfo = require('./package.json');
var moment = require('moment-timezone');
var app = express();
var time = moment().tz("Asia/Jakarta").format('h:mm:ss a')
app.get('/', function (req, res) {
  res.json({ version: packageInfo.version,timenow: time});
});

var server = app.listen(process.env.PORT, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log('Web server started at http://%s:%s time now:'+time , host, port);
});