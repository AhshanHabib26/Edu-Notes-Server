import express, { Request, Response } from "express";

const app = express();

const a = 10

app.get("/", (req : Request, res: Response) => {
  res.send("Welcome, EduNotes Server!!");
});

export default app;
