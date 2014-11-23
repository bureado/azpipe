azpipe
======

`azpipe` is a set of shims that can pipe data from a thing to the cloud.

It's just one way to illustrate the value of Azure Service Bus to power Linux
devices - or any other thing that can run Node.js, PHP, etc.

Inspired on the [Beast Quake](http://bit.ly/1itXs79). Twitter: [@bureado](http://twitter.com/bureado)

Docker
------

You can run this as a Docker image. In this mode, azpipe will work with nc to pipe input via TCP. A Dockerfile
is included. Once your image is built, create a container and pass the TCP port, connection string and topic as
arguments in your `docker run`:

`sudo docker run -p 1090:1090 your-image 1090 "Endpoint=..." your-topic`

Disclaimer
----------

This is a *sample*, designed to illustrate ASB capabilities for open source platforms.
