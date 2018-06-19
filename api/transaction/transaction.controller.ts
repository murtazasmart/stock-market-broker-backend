import {ITransaction, Transaction} from './transaction.model'
import * as express from 'express'

export async function transaction(req : express.Request, res : express.Response) {
  try {
    const _transaction : ITransaction = await Transaction.create({
      createdAt: new Date(),
      name: req.body.name,
      stock: req.body.stock,
      quantity: req.body.quantity,
      type: req.body.type,
      price: req.body.price,
      turn : req.body.turn
    })
    res.send({status: true, transaction: _transaction})
  } catch (error) {
    res
      .status(500)
      .send({
        error: error.toString()
      })
  }
}

export async function getHistory(req : express.Request, res : express.Response) {
  try {
    const all : ITransaction[] = await Transaction.find({})
    res.send(all)
  } catch (error) {
    res
      .status(500)
      .send({
        error: error.toString()
      })
  }
}

export async function portfolio(req : express.Request, res : express.Response) {
  try {
    const all : ITransaction[] = await Transaction.find({name: req.params.name})
    res.send(all)
  } catch (error) {
    res
      .status(500)
      .send({
        error: error.toString()
      })
  }
}
