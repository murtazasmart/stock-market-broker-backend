
import {expect, assert} from 'chai'
import * as supertest from 'supertest-as-promised'

import app from '../../app'
import {CreateTransaction, GetHistory} from './transaction.handler';
import {Transaction} from './transaction.mock';

// const request = supertest(app)

describe ('GET /api/transaction', function () {

  // before(() => {
  //   return Transaction.remove({})
  // });

  // it('returns all transactions', async function () {
  //   const t = await request.get('/api/transaction/history')
  //   expect(t.status).to.equal(200)
  //   expect(t.body).to.have.property('count', 1)
  // });

  it('Returns the status of the create transaction', function(done) {
    const requestBody = {
      "_id": "maheshi01",
      "createdAt": "2018-06-04T13:34:00.000",
      "stock": 1001,
      "name": "abc",
      "quantity": 100,
      "type": "buy",
      "price": 100,
      "turn": 4
    };

    const _transaction = CreateTransaction(requestBody, Transaction);

    _transaction.then((data: any) => {
        assert.equal(typeof data, typeof Object);
        done();
    })
    .catch(err => {
      done();
    });
  });


  it('Returns list of all transactions', function (done) {
      const history = GetHistory(Transaction)
      history.then(data => {
        assert.equal(data.length, 1);     
        done();
      })
      .catch((err: any) => {
        done();
      });
  });
  it('Returns the status of the portfolio', function(done) {
    const requestBody = {
      "_id": "5b2a3c9aa1cf190030e597f2",
        "createdAt": "2018-06-20T11:38:02.619Z",
        "name": "m1",
        "stock": "Cargills",
        "quantity": 1,
        "type": "buy",
        "price": 135,
        "turn": 19,
        "__v": 0
    };

    const _transaction = CreateTransaction(requestBody, Transaction);

    _transaction.then((data: any) => {
        assert.equal(typeof data, typeof Object);
        done();
    })
    .catch(err => {
      done();
    });
  });
});
