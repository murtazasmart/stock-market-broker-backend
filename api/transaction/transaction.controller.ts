import {ITransaction, Transaction} from './transaction.model'
import * as express from 'express'

export async function transaction(req : express.Request, res : express.Response) {
  try {
    const _transactionBuy : ITransaction = await Transaction.create({
      createdAt: new Date(),
      name: req.body.BuyerName,
      stock: req.body.stock,
      quantity: req.body.quantity,
      type: 'buy',
      price: req.body.price,
      turn : req.body.turn
    })
    try {
      const _transactionSell : ITransaction = await Transaction.create({
        createdAt: new Date(),
        name: req.body.SellerName,
        stock: req.body.stock,
        quantity: req.body.quantity,
        type: 'sell',
        price: req.body.price,
        turn : req.body.turn
      })
      res.send({status: true, sell: _transactionSell, buy: _transactionBuy})
    } catch (error) {
      res
        .status(500)
        .send({
          error: error.toString()
        })
    }
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
