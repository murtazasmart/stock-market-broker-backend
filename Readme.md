
# Broker API Simulator

[ ![Codeship Status for murtazasmart/stock-market-broker-backend](https://app.codeship.com/projects/8093dd90-566d-0136-1bf7-2222d9c84640/status?branch=master)](https://app.codeship.com/projects/294769)
# Broker API Simulator

# Project details
### Team name: EXIT
### API doc link - https://docs.google.com/spreadsheets/d/1tFuveKrxBRxqtGC7-UDONrHTRYYbcqwofPyL0zMwmcE/edit#gid=0
### Members:
 - Murtaza Anverali Esufali 16211211
 - Maheshi K.H.Gunaratne    16211197
 - Rathnayake Bhagya P M    16211279
 - Mekala Rashmika K B      16211194
 - M.Kasun lalendra Silva   16211181

| Repository Name        | Github Link           | Live URL  |
| ------------- |-------------| -----|
| Stock market simulator | https://github.com/murtazasmart/stock-market-sim | http://stock-market-simulator.herokuapp.com/ |
| Stock market broker | https://github.com/murtazasmart/stock-market-broker | https://eager-babbage-836674.netlify.com |
| Stock market broker backend | https://github.com/murtazasmart/stock-market-broker-backend | https://hidden-badlands-21838.herokuapp.com/ |
| Stock market analyst service | https://github.com/murtazasmart/stock-market-analyst-service/ | https://stock-market-analyst.herokuapp.com |
| Stock market bank service | https://github.com/murtazasmart/stock-market-bank-service/ | https://stock-market-bank-service.herokuapp.com/ |

## About this
This project is a Stock Share Market Broker API Simulator. 

## Installation

### Method 1
 - clone the repo
 - go to the root folder of the project
 - run `docker build -t stock-market-broker-backend .` this will build the image
 - to run the image `docker run -p 3000:9000 stock-market-broker-backend`
 - browse `http://localhost:3000/api/ping`
 
 ### Method 2
  - `npm install`
  - `npm run build`
  - `npm run start`

## CI/CD

 - This has been done using code-ship. It runs the entire build and checks for failure for every push.
 - It goes to deployment step when pushed to master/pull requests etc. Deployment step checks if all tests passed and then deploys to the server automatically.
 - Heroku has been used as the deployment server.
