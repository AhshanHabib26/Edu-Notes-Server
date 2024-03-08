export type TUserType = {
    name: string
    email: string
    password: string
    passwordChangedAt?: Date
    role?: 'user' | 'admin'
    status?: 'active' | 'blocked'
    isDeleted?: boolean
  }


  