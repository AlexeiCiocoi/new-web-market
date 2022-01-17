import { NextFunction, Request, Response } from "express";
import jwtHelper from "../helpers/jwt.helper";
import { IUserController, UserCreationAttr, UserCustomReq } from "../interfaces/user.interface";
import * as constants from '../constants/user.constants'
const ApiError = require('../error/apiError')
const userService = require('../services/user.service')
const bcrypt = require('bcrypt')


export default  class UserController {

    async register( req: Request , res: Response, next: NextFunction){
        const { email , password , name } = req.body

      
        try{
            
            let checkUser: boolean = await userService.checkExistingUser(email)
            if(checkUser){
                return res.json(ApiError.badRequest(constants.EMAIL_IN_USE))
            }
            const hashPassword: string = await bcrypt.hash(password,5)
            const newUser: UserCreationAttr = await userService.register({
                email,
                password:hashPassword,
                name
            })
            
            return res.status(200).send({message:'Success'})
        }catch(e){
            next(ApiError.badRequest(e.message))
        }
    }

    async login( req: Request , res: Response, next: NextFunction){
        const { email , password} = req.body
        
        let user: UserCreationAttr = await userService.login(email)
       
        try{
            if(!user) res.json(ApiError.badRequest(constants.INCORRECT_EMAIL))
            const comparePassword: string = await bcrypt.compareSync(password ,user.password)
            if(!comparePassword) res.json(ApiError.badRequest(constants.INCORRECT_PASSWORD))
            const token: string = jwtHelper({
                name: user.name,
                role: user.role,
                id: user.id,
                email: user.email
            })
            return res.json({token})
        }catch(e){
            next(ApiError.badRequest(e.message))
        }
    }

    async checkAuth( req: UserCustomReq , res: Response ){
        const { email } = req.user
        const user: UserCreationAttr = await userService.login(email)
        return res.json({token: req.token})
    }
}

module.exports = new UserController()
