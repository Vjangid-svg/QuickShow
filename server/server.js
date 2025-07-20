import express from "express"
import cors from "cors"
import "dotenv/config"
import connectDb from "./config/db.js";
import { clerkMiddleware } from '@clerk/express'
import { serve } from "inngest/express";
import { inngest, functions } from "./inngest/index.js"
import ShowRouter from "./routes/showRoutes.js";
const app = express();
const port = 3000;

await connectDb()

// Middlewares
app.use(express.json())
app.use(cors())
app.use(clerkMiddleware())

// API Routes
app.get("/",(req,res)=>res.send("G.O.A.T{Greatest Of All Time}"))
app.use("/api/inngest",serve({ client: inngest, functions }));

app.use("/api/show",ShowRouter)

app.listen(port,()=>console.log("server listening to the port",port))
