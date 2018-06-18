import * as mongoose from 'mongoose'

export interface IUser extends mongoose.Document {
  _id: string,
  createdAt: Date,
  bankAccount: string,
  name: string,
  public: {
    _id: string,
    createdAt: Date,
    bankAccount: string,
    name: string,
  }
}

const UserSchema = new mongoose.Schema({
  createdAt: Date,
  bankAccount: String,
  name: String,
})

UserSchema.virtual('public').get(function () {
  return {
    _id: this._id,
    bankAccount: this.bankAccount,
    name: this.name,
    createdAt: this.createdAt
  }
})

export const User = mongoose.model<IUser>('User', UserSchema)
