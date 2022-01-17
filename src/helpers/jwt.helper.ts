import { UserRespondAttr } from "../interfaces/user.interface"

const jwt = require('jsonwebtoken')

export default (data: UserRespondAttr): string  => {
    return jwt.sign(data,process.env.TOKEN_SECRET_KEY,{expiresIn: '24h'})
}