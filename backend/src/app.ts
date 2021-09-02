import express, {Request, Response} from "express"
import logger from "./logger"
import accountRouter from "@routes/accountRouter"
import authRouter from "@routes/authRouter"
import backupRouter from "@routes/backupRouter"
import keyRouter from "@routes/keyRouter"
import {verifyToken} from "@middlewares/authHandler"

const app = express()

app.use(logger)
app.use("*", verifyToken)
app.use("/auth", authRouter)
app.use("/account", accountRouter)
app.use("/keys", keyRouter)
app.use("/backups", backupRouter)


app.get("/", (req: Request, res: Response) => {
    res.status(200).json({message: "I'm alive!"})
})

export default app