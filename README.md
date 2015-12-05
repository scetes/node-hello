# node-hello

Just three to try your first Docker container.
* `Dockerfile` defines the tasks for building the image.  It includes a step for installing NodeJS and running npm to install modules.
* `pacakge.json` defines the NodeJS modules to install (by npm).  Express is the only module used in this demo.
* `index.js` is the application code.

Pre-built image is in [Docker Hub](https://hub.docker.com/r/scetes/ubuntu-node-hello/). 

To build it yourself

#### Step 1:  
Install [Docker engine](http://docs.docker.com/engine/installation/).
#### Step 2: 
Follow Docker instructions for your OS to start your Docker engine and open a terminal window.

Clone the three files in this GitHub repo to a directory

#### Step 3: 
Change to the directory, and run the build the Docker image with this command

`$ docker build —t [your Docker repo name] .`

list your images

`$ docker images`

will display something like this:

```
REPOSITORY                            TAG                 IMAGE ID            CREATED             VIRTUAL SIZE
scetes/ubuntu-node-hello              latest              c93d4c98d4b5        28 hours ago        401.5 MB
```
### Step 4: Run the container
`docker run -t -p 8088:8088 [your image name here]`

The -p option maps external:internal ports.  So, changing to this:
`docker run -t -p 80:8088 [your image name here]`

will expose the app on port 80.


