import { z } from 'zod'


export const userValidation = z.object({
  name: z.string({ required_error: 'Name is Required' }),
  email: z
    .string({ required_error: 'Email is Required' })
    .email({ message: 'Invalid email format' }),
  password: z
    .string({ required_error: 'Password is Required' })
    .min(8, { message: 'Password must be minimum 8 characters' })
    .max(20, { message: 'Password can not be more than 20 characters' }),
})
