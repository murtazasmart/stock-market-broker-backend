import * as mongoose from 'mongoose'

export interface ITransaction extends mongoose.Document {
  _id: string,
  createdAt: Date,
  stock: string,
  name: string,
  quantity: number,
  type: string,
  price: number,
  gameId:string,
  turn: number
  public: {
    _id: string,
    createdAt: Date,
    stock: string,
    name: string,
    quantity: number,
    type: string,
    price: number,
    gameId:string,
    turn: number
  }
}

const TransactionSchema = new mongoose.Schema({
  createdAt: Date,
  stock: String,
  name: String,
  quantity: Number,
  type: String,
  price: Number,
  gameId:String,
  turn: Number
})

TransactionSchema.virtual('public').get(function () {
  return {
    _id: this._id,
    name: this.name,
    createdAt: this.createdAt,
    stock: this.stock,
    quantity: this.quantity,
    type: this.type,
    price: this.price,
    gameId:this.gameId,
    turn: this.turn
  }
})

export const Transaction = mongoose.model<ITransaction>('Transaction', TransactionSchema)
