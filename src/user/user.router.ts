import express from 'express'
import { userControler } from './user.controller'
const router = express.Router()

router.post("/register", userControler.createUser)

export default router
