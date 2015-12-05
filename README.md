# node-hello
Simple NodeJS Express app

Three files to try your first Docker container.
* `Dockerfile` defines the tasks for building the image.  It includes a step for installing NodeJS and running npm to install modules.
* `pacakge.json` defines the NodeJS modules to install (by npm).  Express is the only module used in this demo.
* `index.js` is the application code.  It responds to an HTTP GET with "hello from docker."

Pre-built image is in [Docker Hub](https://hub.docker.com/r/scetes/ubuntu-node-hello/). 

