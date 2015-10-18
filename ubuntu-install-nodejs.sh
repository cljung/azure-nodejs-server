#!/bin/bash
echo "Installing node.js and starting webserver"

# ---------------------------------------------------------
# install node.js and node.js package manager
# ---------------------------------------------------------
sudo apt-get -y install nodejs
sudo apt-get -y install npm

# ---------------------------------------------------------
# Start the node.js webserver
# ---------------------------------------------------------
cd ~/azure-nodejs-server
sudo nodejs nodejsserver.js &
