azpipe
======

`azpipe` pipes stdin on a thing to an Azure Service Bus topic.

Usage
-----

    foo | azpipe --conns [connection string] --topic [topic name]

`azpipe` outputs the content it receives from stdin (and send them back to
stdout, if you were wondering)

You can also use `config.js` to set a connection string and topic name if you
don't want to do it via your shell.

AMQP
----

The Node.js solution (`azpipe`) uses the REST interface for ASB, but you can
also try AMQP 1.0 if you'd like - there's a sample PHP implementation on
`devpub.php`. It also reads stdin and outputs stdout.

AMQP is faster than REST, but it's not a big deal if you plan on sending,
say, less than 150 messages/second.

Examples
--------

    tail -f /var/log/messages | azpipe --conns ... --topic ...
    logger Hey

If you want to easily peek at the topic, see the `dashsub` project.

Learn more
----------

More information available on [MSDN](http://msdn.microsoft.com/en-us/library/jj841069.aspx).

Disclaimer
----------

This is just sample content, designed to illustrate ASB capabilities for open source platforms.
