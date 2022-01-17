import { NextFunction, Response } from "express"
import { UserCustomReq } from "../interfaces/user.interface"
const UserProfileService = require('../services/userProfile.service')



class UserProfile{

    async create( req: UserCustomReq , res: Response, next: NextFunction ){
        const { id } = req.user
        try{
            const profileData: UserProfile = await UserProfileService.create({...req.body, UserId: id})
            return res.json(profileData)
        }catch(e){
            next(ApiError.badRequest(e.message))
        }
    }

    async update( req: UserCustomReq , res: Response, next: NextFunction ){
        const { id } = req.user
        try{
            await UserProfileService.updatedProfile({...req.body}, id)
            return res.status(200).send({message: 'Success'})
        }catch(e){
            next(ApiError.badRequest(e.message))
        }
    }
}

module.exports = new UserProfile()