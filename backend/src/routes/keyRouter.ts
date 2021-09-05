import { Router, Request, Response } from "express"

const keyRouter = Router()

keyRouter.get('/', (req: Request, res: Response) => {
    res.status(200).send({message: ""})
})

keyRouter.put('/new', (req: Request, res: Response) => {
    res.status(200).send({message: ""})
})

export default keyRouter