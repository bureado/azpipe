# generated with bh2df

FROM ubuntu:latest
MAINTAINER Jose Miguel Parrella <j@bureado.com>

RUN sed -i 's/^deb-src.*//g' /etc/apt/sources.list /etc/apt/sources.list.d/*
RUN echo 'Acquire::http { Proxy "http://172.17.42.1:3142"; };' > /etc/apt/apt.conf.d/02proxy
RUN apt-get update
RUN apt-get -y install npm nodejs-legacy php5-cli git
RUN git clone https://github.com/bureado/azpipe.git /opt/azpipe
RUN cd /opt/azpipe/devpub && npm install

ENTRYPOINT ["/opt/azpipe/devpub/bin/azpnc"]
