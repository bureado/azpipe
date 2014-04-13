azpipe
======

A set of shims and tools for piping things to Azure

azpipe.js pipes STDIN from a thing to an Azure Service Bus Topic

Usage: [foo] | azpipe --conns [connection string] --topic [topic name]

azpipe outputs the content it receives from stdin.

You can also use config.js to set a connection string and topic name if you don't want to do it via your shell.

