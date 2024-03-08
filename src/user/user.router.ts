import express from 'express'
import { userControler } from './user.controller'
const router = express.Router()

router.post('/register', userControler.createUser)
router.post('/login', userControler.loginUser)

export default router
