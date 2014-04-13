#!/usr/bin/env nodejs

/*

  azpipe - pipes STDIN from a thing to an Azure Service Bus Topic

    (C) 2014 Jose Miguel Parrella <j@bureado.com>
    Free software under the terms of the Apache 2.0 License

    Usage: [foo] | azpipe --conns [connection string] --topic [topic name]

    azpipe outputs the content it receives from stdin.

    You can also use config.js to set a connection string and topic name if you don't want to do it via your shell.

*/

var azure  = require('azure'),
    config = require('./config'),
    targs  = require('optimist').argv;

var sbConnectionString, sbTopic;

if ( targs.conns && targs.topic ) { // Args will override
  sbConnectionString = targs.conns;
  sbTopic = targs.topic;
} else { // Assuming you're using a config file
  sbConnectionString = config.sbConnectionString;
  sbTopic = config.sbTopic;
}

if ( sbConnectionString && sbTopic ) {
  var sbService = azure.createServiceBusService(sbConnectionString);
  process.stdin.resume();
  process.stdin.setEncoding('utf8');
  process.stdin.on('data', function(data) {
    sbService.sendTopicMessage(sbTopic, data, function(error){ process.stdout.write(data); });
  });
} else {
  console.log("Error: you need to define a connection string and topic name!");
}
