import httpStatus from 'http-status'
import AppError from '../errors/AppError'
import { TUserType } from './user.interface'
import { User } from './user.model'

export const createUserService = async (payload: TUserType) => {
  const { name, email, password } = payload

  const isUserExists = await User.findOne({ email })

  if (isUserExists) {
    throw new AppError(httpStatus.UNAUTHORIZED, 'User Already Exists!')
  }

  const result = await User.create({ name, email, password })
  return result
}
