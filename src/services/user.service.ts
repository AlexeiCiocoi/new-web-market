import Container, { Inject, Service } from "typedi"
import { UserAttributes, UserCreationAttr } from "../interfaces/user.interface"
import { User } from "../models/user.model"


class UserService {
    public async register(user:UserAttributes): Promise<UserCreationAttr>{
        const newUser: UserCreationAttr = await User.create(user)
        return newUser
    }

    public async login(email: string): Promise<User>{
        return await User.findOne({
            where:{
                email
            }
        })
         
    }

    public async checkExistingUser(email: string): Promise<boolean>{
        const existingUser: User = await User.findOne({where:{email}})
        if(existingUser){
            return true
        }
        return false
    }

}
module.exports = new UserService()
