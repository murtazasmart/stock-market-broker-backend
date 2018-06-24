FROM mhart/alpine-node:6.5

RUN mkdir /app
WORKDIR /app


ADD ./package.json .

RUN npm install -g nodemon typescript@2.6 tslint mocha yarn
RUN npm install

COPY . .

RUN npm run build

EXPOSE 9000
CMD ["node", "dist/app.js"]


