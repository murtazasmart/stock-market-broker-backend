[ ![Codeship Status for murtazasmart/stock-market-broker-backend](https://app.codeship.com/projects/8093dd90-566d-0136-1bf7-2222d9c84640/status?branch=master)](https://app.codeship.com/projects/294769)
# Typescript + Docker + Express + Mongoose = Awesome

## About this
This project is a fully working bootstrap for developping an express-mongoose api with typescript.

## Why is it awesome ?

 - the ONLY install you need is docker. Don't worry about installing mongo, npm or whatever else.
 - Typescript is awesome. your code is checked against a LOT of possible mistakes. Try inserting some typos such as `send(...)` instead of `send()` and [see the console warn you about it](#typos).
 - [Possible usage of `await/async`](#await) and/or Promise-style code => no Callback Hell
 - Linters are already installed. Keep your code clean.
 - Automated mocha unit testing. Mocha tests are written in ts, but run on the transpiled javascript code. So the actual transpiled application is properly tested.
 - Automated testing by codeship on code commit. They run the same container as you do : if it works at home, it works on CI-servers.

## Installation

 - clone the repo
 - go to the root folder of the project
 - run `docker build -t stock-market-broker-backend .` this will build the image
 - to run the image `docker run -p 3000:9000 stock-market-broker-backend`
 - browse `http://localhost:3000/api/ping`, `http://localhost:3000/api/views/promise`, `http://localhost:3000/api/views/await`

## CI/CD

 - This has been done using code-ship. It runs the entire build and checks for failure for every push.
 - It goes to deployment step when pushed to master/pull requests etc. Deployment step checks if all tests passed and then deploys to the server automatically.
