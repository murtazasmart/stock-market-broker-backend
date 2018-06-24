import {IUser, User} from './user.model'

export async function AddUser(RequestBody: any, User: any){
    const _user:IUser = await User.create({
      createdAt: new Date(),
      name: RequestBody.name,
      bankAccount: RequestBody.bankAccount
    });
    return _user;
}

export async function getUsers (RequestBody: any, User: any)
{
    const _users:number = await User.count({})
    return _users;
}