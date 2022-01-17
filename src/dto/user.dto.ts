import  * as yup  from 'yup'

export const userSchema = yup.object({
    body: yup.object({
        email: yup.string().email().required(),
        password: yup.string().required(),
        name: yup.string().required(),
    })
   

})