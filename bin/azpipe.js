#!/usr/bin/env node

/*

  azpipe - pipes STDIN from a thing to an Azure Service Bus Topic

  (C) 2014 Jose Miguel Parrella <j@bureado.com>
  Free software under the terms of the Apache 2.0 License

    Usage: [foo] | azpipe --conns [connection string] --topic [topic name]

  azpipe outputs the content it receives from stdin.

  You can also use config.js to set a connection string and topic name if you don't want to do it via your shell.

*/

var azure  = require('azure'),
    config = require('../config'),
    targs  = require('optimist').argv,
    Lazy   = require("lazy");

var sbConnectionString, sbTopic;

// Trying to find a connection string

if ( targs.conns && targs.topic ) { // Args will override
  sbConnectionString = targs.conns;
  sbTopic = targs.topic;
} else { // Assuming you're using a config file
  if ( config.sbConnectionString && config.sbTopic ) {
    sbConnectionString = config.sbConnectionString;
    sbTopic = config.sbTopic;
  } else { // AZP provisioning placeholder
    /* AZP_PROV */
  }
}

// Iterating thru stdin lines and sending them to the cloud (and stdout)

if ( sbConnectionString && sbTopic ) {
  var sbService = azure.createServiceBusService(sbConnectionString);
  process.stdin.setEncoding('utf8');
  new Lazy(process.stdin).lines.forEach(
    function(line) {
      var data = line.toString();
      sbService.sendTopicMessage(sbTopic, data, function(error){ console.log(data); });
    }
  );
  process.stdin.resume();
} else {
  console.log("Error: connection string and topic are required.");
}
