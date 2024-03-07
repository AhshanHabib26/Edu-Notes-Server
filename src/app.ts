import express, { Request, Response } from 'express'
const app = express()
import cors from 'cors'
import authHandler from './user/user.router'
import errorHandler from './middlewares/errorHandler'

app.use(express.json())
app.use(cors())

app.get('/', (req: Request, res: Response) => {
  res.send('Welcome, EduNotes Server!!')
})


app.use("/api/auth", authHandler)



// Global Error Handler
app.use(errorHandler)

export default app
