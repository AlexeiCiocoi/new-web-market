import { Model,DataTypes } from "sequelize";
import { UserAttributes , UserCreationAttr } from "../interfaces/user.interface";
import sequelize from "../config/db.config";

export class User extends Model<UserAttributes,UserCreationAttr>
    implements UserAttributes {

    declare id: number;
    declare email: string;
    declare name: string;
    declare password: string;
    declare role: string;

    declare readonly updatedAt: Date;
    declare readonly createdAt: Date;
}
User.init({
    id: {type:DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    email: {type: DataTypes.STRING, allowNull: false, unique: true},
    password: {type: DataTypes.STRING, allowNull: false},
    name: {type: DataTypes.STRING,allowNull: false},
    role: {type: DataTypes.STRING,allowNull: false,defaultValue: 'User'}
},{
    tableName: 'users',
    sequelize
})