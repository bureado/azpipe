dashsub
=======

`dashsub` is a Node.js application that connects to an Azure Service Bus topic and
sends messages to browser via WebSockets. It also has a simple HTML reader which
is self-contained and served via Express.

`config.js` should include your connection string, topic and subscription names.

You can run this locally (TCP 9999 by default) or as an Azure Web Site. You should
be able to use a CLI WebSockets client if desired.

If you want to feed the bus with data from a Linux device capable of running
Node.js, look at `devpub`.

Usage
-----

    nodejs app.js

Disclaimer
----------

This is just sample content, designed to illustrate ASB capabilities for open source platforms.
