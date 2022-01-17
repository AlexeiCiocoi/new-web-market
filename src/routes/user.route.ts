
const userRouter = require('express')
const UserRouter = new userRouter()
const authorization = require('../middleware/authorization')
const validateDto = require('../middleware/validate-dto')
const UserController = require('../controllers/user.controller')
const UserProfile = require('../controllers/userProfile.controller')
import { userProfileSchema } from '../dto/userProfile.dto'
import { userSchema } from '../dto/user.dto'





UserRouter.post('/registration',UserController.register)
UserRouter.post('/login',
    validateDto(userSchema),
    UserController.login)
UserRouter.get('/auth', authorization, UserController.checkAuth)
UserRouter.post('/profile',
    validateDto(userProfileSchema),
    UserProfile.create)
UserRouter.put('/profile',UserProfile.update)

module.exports = UserRouter