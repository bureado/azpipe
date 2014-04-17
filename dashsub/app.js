var path = require('path'),
  util = require('util'),
  config = require('./config'),
  azure = require('azure'),
  http = require('http'),
  express = require('express'),
  app = express(),
  WebSocketServer = require('ws').Server;

app.use(express.static(__dirname + '/public'));

var server = http.createServer(app);
server.listen(process.env.PORT || 9999);

var wss = new WebSocketServer({server: server});

if ( config.sbConnectionString && config.sbSubscription && config.sbTopic ) {
  var serviceBusService = azure.createServiceBusService(config.sbConnectionString);

  var allSocks = [];

  wss.on('connection', function(ws) {
    ws.who = allSocks.length;
    var curr = allSocks.push(ws);
    console.log("Someone's here. Shht. Now with " + curr +  ".");
  });

  var loop = setInterval(function() {
    serviceBusService.receiveSubscriptionMessage(config.sbTopic, config.sbSubscription, function(error, receivedMessage) {
      if(!error) {
         for ( var i=0; i < allSocks.length ; i++ ) {
           var ws = allSocks[i];
           if ( ws.readyState == 1 ) {
             ws.send(receivedMessage.body);
           }
         }
      } else {
        console.log("Error: " + error);
      }
    });
  }, 500);
} else {
  console.log("Error: connection string, subscription and topic are required.");
}
