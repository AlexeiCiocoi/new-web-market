import { Request } from 'express';
import {Optional } from 'sequelize'

export interface UserAttributes{
    id: number;
    email: string;
    name: string;
    password: string;
    role: string;
}

export interface UserCreationAttr extends Optional<UserAttributes , 'id' |'role'>{}
export interface UserRespondAttr extends Optional<UserAttributes , 'password'>{}

export interface IUserController{
    register(): void
}

export interface UserCustomReq extends Request{
    user: UserCreationAttr;
    token?: string;
}

export interface UserProfileAttr{
     id: number;
     lastName?: string;
     phoneNumber?: string;
     birthDate?: Date;
     gender?: string;
     language?: string;
     UserId: number;
     img?: any;
}

export interface UserProfileCreateAttr extends Optional<UserProfileAttr , 'id' |'UserId'>{}

export interface UserBasketAttr {
    id: number;
    ProductId: number;
    quantity: number;
    UserId: number;
}

export interface UserBasketCreateAtt extends Optional<UserBasketAttr , 'id'>{}

export interface UserBasketResponse extends UserBasketAttr{
    rows: any;
    totalPrice?: any;
    
}