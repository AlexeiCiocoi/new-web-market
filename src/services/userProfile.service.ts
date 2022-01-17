import { UserProfileAttr } from "../interfaces/user.interface";
import { UserProfile } from "../models/userProfile.model";



class UserProfileService{

    public async create(data: UserProfileAttr): Promise<UserProfileAttr>{
        const profile: UserProfileAttr = await UserProfile.create(data);
        return profile
    }

    public async updateProfile(data: UserProfileAttr,UserId: number){
        await UserProfile.update({
            ...data
        },
        {
            where: {
                UserId
            }
        }
        )
    }

}

module.exports = new UserProfileService()