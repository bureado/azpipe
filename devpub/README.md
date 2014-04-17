azpipe
======

azpipe pipes STDIN from a thing to an Azure Service Bus topic.

Usage:

  foo | azpipe --conns [connection string] --topic [topic name]

azpipe outputs the content it receives from stdin.

You can also use config.js to set a connection string and topic name if you
don't want to do it via your shell.


Example:

  tail -f /var/log/messages | azpipe --conns ... --topic ...
  logger Hey

If you want to easily peek at the topic, see the dashsub project.
