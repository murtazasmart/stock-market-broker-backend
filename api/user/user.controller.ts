import {IUser, User} from './user.model'
import * as express from 'express'

export async function addUser (req: express.Request, res: express.Response) {
  try {
    const user: IUser = await User.create({
      createdAt: new Date(),
      name: req.body.name,
      bankAccount: req.body.bankAccount
    })

    res.send({ user })
  } catch (error) {
    res.status(500).send({error: error.toString()})
  }
}

export async function getUsers (req: express.Request, res: express.Response) {
  try {
    const count: number = await User.count({})
    res.send({ count })
  } catch (error) {
    res.status(500).send({error: error.toString()})
  }
}
