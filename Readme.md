
# Typescript + Docker + Express + Mongoose = Awesome

[ ![Codeship Status for aherve/typescript-express-docker](https://app.codeship.com/projects/786513d0-dc12-0135-eb8f-32499970d10e/status?branch=master) ](https://app.codeship.com/projects/265420)


[ ![Codeship Status for murtazasmart/stock-market-broker-backend](https://app.codeship.com/projects/8093dd90-566d-0136-1bf7-2222d9c84640/status?branch=master)](https://app.codeship.com/projects/294769)
# Typescript + Docker + Express + Mongoose = Awesome


## About this
This project is a fully working bootstrap for developping an express-mongoose api with typescript.

## Why is it awesome ?


 - the ONLY install you need is docker. Don't worry about installing mongo, npm or whatever else. Docker-compose takes all the leverage for you (see [Installation](#installation)).
 - Typescript is awesome. your code is checked against a LOT of possible mistakes. Try inserting some typos such as `ssend(...)` instead of `send()` and [see the console warn you about it](#typos).

 - the ONLY install you need is docker. Don't worry about installing mongo, npm or whatever else.
 - Typescript is awesome. your code is checked against a LOT of possible mistakes. Try inserting some typos such as `send(...)` instead of `send()` and [see the console warn you about it](#typos).

 - [Possible usage of `await/async`](#await) and/or Promise-style code => no Callback Hell
 - Linters are already installed. Keep your code clean.
 - Automated mocha unit testing. Mocha tests are written in ts, but run on the transpiled javascript code. So the actual transpiled application is properly tested.
 - Automated testing by codeship on code commit. They run the same container as you do : if it works at home, it works on CI-servers.

## Installation

 - clone the repo
 - run `docker-compose up`
 - browse `http://localhost:3000/api/ping`, `http://localhost:3000/api/views/promise`, `http://localhost:3000/api/views/await`
 - profit

## Useful knowledge

### for production build

`sudo docker-compose -f docker-compose.prod.yml up`

### Rebuilding the images
After adding new npm or typings package, you will have to rebuild your images as follows:

 - `docker-compose stop`
 - `docker-compose rm`
 - `docker-compose build`
 - `docker-compose up`

### Add new npm package:
 - `docker-compose run api npm install <wathever> --save`

### Can I deploy ?
I'v not yet automated the deployment. For now you can do whatever you want with the `/dist` folder, that contains the transplied `js` code.

## Typos
Typescript validations are awesome:

![typo](https://cloud.githubusercontent.com/assets/2798256/18518627/0efce218-7aa1-11e6-89a2-74455eede178.png)

![selection_063](https://cloud.githubusercontent.com/assets/2798256/18518718/6d7694ec-7aa1-11e6-83d2-0938e25f5f45.png)

## Await

Typescript [now support async/await](https://blogs.msdn.microsoft.com/typescript/2015/11/03/what-about-asyncawait/) and this build let you take advantage of it. See `/api/views` for two implementations of a simple mongoose request. One uses await, whereas the other uses promises.

The code now looks like as it where synchronous, but does not block the thread:

```typescript
export async function awaitIndex (req: express.Request, res: express.Response) {
  try {
    const lastVisit: IView = await View.create({
      visitedAt: new Date(),
      visitedBy: getIp(req),
    })

    const count: number = await View.count({})
    res.send({ count, lastVisit: lastVisit.public })

  } catch (error) {
    res.status(500).send({error: error.toString()})
  }
}
```

Even the tests are written using ES7-like syntax:

```typescript
 it('returns a new view', async function () {
    const t = await request.get('/api/views/await')
    expect(t.status).to.equal(200)
    expect(t.body).to.have.property('lastVisit')
    expect(t.body).to.have.property('count', 1)
  })
```

## Continuous Testing

The config provided in `codeship-services.yml` and `codeship-steps.yml` will trigger a build at each code commit.

## TODO/ coming soon
 - automated build of a production-ready docker

 - go to the root folder of the project
 - run `docker build -t stock-market-broker-backend .` this will build the image
 - to run the image `docker run -p 3000:9000 stock-market-broker-backend`
 - browse `http://localhost:3000/api/ping`, `http://localhost:3000/api/views/promise`, `http://localhost:3000/api/views/await`

## CI/CD

 - This has been done using code-ship. It runs the entire build and checks for failure for every push.
 - It goes to deployment step when pushed to master/pull requests etc. Deployment step checks if all tests passed and then deploys to the server automatically.

