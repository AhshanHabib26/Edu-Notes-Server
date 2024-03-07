import { Schema, model } from 'mongoose'
import { TUserType } from './user.interface'

const userSchema = new Schema<TUserType>(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
      select: 0,
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
    role: {
      type: String,
      enum: ['user', 'admin'],
      default: 'user',
    },
    status: {
      type: String,
      enum: ['active', 'blocked'],
      default: 'active',
    },
    passwordChangedAt: {
      type: Date,
    },
  },
  { timestamps: true },
)

export const User = model<TUserType>('User', userSchema)
