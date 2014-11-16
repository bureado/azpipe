# generated with bh2df
FROM ubuntu:latest

RUN \
  sed -i 's/^deb-src.*//g' /etc/apt/sources.list /etc/apt/sources.list.d/* && \
  apt-get update && \
  apt-get -y install npm nodejs-legacy php5-cli git && \
  git clone https://github.com/bureado/azpipe.git /opt/azpipe && \
  cd /opt/azpipe/devpub && \
  npm install && \
  echo OK
