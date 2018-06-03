import {expect} from 'chai'
import * as supertest from 'supertest-as-promised'

import app from '../../app'
import {Transaction} from './transaction.model'

const request = supertest(app)

describe ('GET /api/transaction', function () {

  before(() => {
    return Transaction.remove({})
  })

//   it('returns all transactions', async function () {
//     const t = await request.get('/api/transaction/history')
//     expect(t.status).to.equal(200)
//     expect(t.body).to.have.property('count', 1)
//   })

//   it('creates a transaction', async function () {
//     expect(await Transaction.count({})).to.equal(1)
//   })

})
