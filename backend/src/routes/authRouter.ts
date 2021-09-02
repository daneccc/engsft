import { Router, Request, Response } from "express"

const authRouter = Router()

authRouter.get('/', (req: Request, res: Response) => {
    res.status(200).send({message: ""})
})


export default authRouter;