# azure-nodejs-server
Simple bash script that installs node.js and runs the simplest node.js webserver you can imagine. It only echos the time and the local ip address the web server runs on.
Perfect for demoing stuff on Azure that is Linux based.

All you need to do on a Ubuntu Linux server on Azure is:

1. Create the Ubuntu Linux VM on Azure with endpoint for http on port 80 (and ssh)
2. Login to the machine via ssh/PuTTY
3. sudo apt-get install git
4. git clone https://github.com/cljung/azure-nodejs-server
5. cd ./azure-nodejs-server
6. chmod +x ./ubuntu-install-nodejs.sh
7. ./ubuntu-install-nodejs.sh

Voila! You have a responding webserver on xxxxxx.cloudapp.net
