
# Broker API Simulator

[ ![Codeship Status for aherve/typescript-express-docker](https://app.codeship.com/projects/786513d0-dc12-0135-eb8f-32499970d10e/status?branch=master) ](https://app.codeship.com/projects/265420)


[ ![Codeship Status for murtazasmart/stock-market-broker-backend](https://app.codeship.com/projects/8093dd90-566d-0136-1bf7-2222d9c84640/status?branch=master)](https://app.codeship.com/projects/294769)
# Broker API Simulator


## About this
This project is a Stock Share Market Broker API Simulator. 

## Installation

 - clone the repo
 - go to the root folder of the project
 - run `docker build -t stock-market-broker-backend .` this will build the image
 - to run the image `docker run -p 3000:9000 stock-market-broker-backend`
 - browse `http://localhost:3000/api/ping`

## CI/CD

 - This has been done using code-ship. It runs the entire build and checks for failure for every push.
 - It goes to deployment step when pushed to master/pull requests etc. Deployment step checks if all tests passed and then deploys to the server automatically.