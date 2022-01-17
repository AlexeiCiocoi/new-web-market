import  * as yup  from 'yup'

export const userProfileSchema = yup.object({
    body: yup.object({
      
        lastName: yup.string(),
        phoneNumber: yup.string(),
        birthDate: yup.date(),
        gender: yup.string(),
        language:  yup.string(),
    })
  
  
})