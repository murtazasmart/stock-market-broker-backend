import { ITransaction, Transaction } from './transaction.model'
import * as express from 'express'

export async function transaction(req: express.Request, res: express.Response) {
  try {
    const _transaction: ITransaction = await Transaction.create({
      createdAt: new Date(),
      name: req.body.name,
      stock: req.body.stock,
      quantity: req.body.quantity,
      type: req.body.type,
      price: req.body.price,
      gameId: req.body.gameId,
      turn: req.body.turn
    })
    res.send({ status: true, transaction: _transaction })
  } catch (error) {
    res
      .status(500)
      .send({
        error: error.toString()
      })
  }
}

export async function getHistory(req: express.Request, res: express.Response) {
  try {
    const all: ITransaction[] = await Transaction.find({ gameId: req.params.gameId })
    res.send(all)
  } catch (error) {
    res
      .status(500)
      .send({
        error: error.toString()
      })
  }
}

export async function portfolio(req: express.Request, res: express.Response) {
  try {
    const all: ITransaction[] = await Transaction.find({ name: req.params.name })
    res.send(all)
  } catch (error) {
    res
      .status(500)
      .send({
        error: error.toString()
      })
  }
}

export async function portfolioValue(req: express.Request, res: express.Response) {
  try {
    const all: ITransaction[] = await Transaction.find({ name: req.params.name })
    let txnBuy = 0;
    let txnSell = 0;
    all.forEach((txn) => {
      if (txn.type === 'buy') {
        txnBuy += (txn.quantity * txn.price);
      }
      if (txn.type === 'sell') {
        txnSell += (txn.quantity * txn.price);
      }
    });
    const portfolioVal = txnBuy - txnSell;
    res.send({
      name: req.params.name,
      value: portfolioVal,
    })
  } catch (error) {
    res
      .status(500)
      .send({
        error: error.toString()
      })
  }
}

export async function deleteAll(req: express.Request, res: express.Response) {
  try {
    await Transaction.deleteMany({});
    res.send({ result: 'success' });
  } catch (error) {
    res
      .status(500)
      .send({
        error: error.toString()
      })
  }
}
