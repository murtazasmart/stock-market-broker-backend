import {ITransaction, Transaction} from './transaction.model'

export async function CreateTransaction(RequestBody: any, Transaction: any) {
    const _transaction : ITransaction = await Transaction.create({
      createdAt: new Date(),
      name: RequestBody.name,
      stock: RequestBody.stock,
      quantity: RequestBody.quantity,
      type: RequestBody.type,
      price: RequestBody.price,
      gameId:RequestBody.gameId,
      turn : RequestBody.turn
    });

    return _transaction;
}

export async function GetHistory(RequestBody:any,Transaction: any) {
  const all : ITransaction[] = await Transaction.find({gameId:RequestBody.gameId});
  return all;
}

export async function portfolio(RequestBody: any, Transaction: any)
{
  const _portfolio:ITransaction[] = await Transaction.find({name: RequestBody.name});
  //return 
  return _portfolio;
}