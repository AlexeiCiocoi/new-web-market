import { Model,DataTypes } from "sequelize";
import sequelize from "../config/db.config";
import { UserProfileAttr, UserProfileCreateAttr } from "../interfaces/user.interface";

export class UserProfile extends Model<UserProfileCreateAttr , UserProfileAttr>
    implements UserProfileAttr{
    declare id: number;
    declare lastName?: string;
    declare phoneNumber?: string;
    declare birthDate?: Date;
    declare gender?: string;
    declare language?: string;
    declare UserId: number;
    declare img?: any;

    declare readonly updatedAt: Date;
    declare readonly createdAt: Date;

}

UserProfile.init({
    id: {type:DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    img: { type: DataTypes.STRING },
    lastName: {type: DataTypes.STRING},
    phoneNumber: {type: DataTypes.STRING, unique: true},
    birthDate: {type: DataTypes.DATEONLY},
    gender: {type: DataTypes.STRING},
    language: {type: DataTypes.STRING,defaultValue: 'RU'},
    
},{
    tableName: 'user_profile',
    sequelize
})