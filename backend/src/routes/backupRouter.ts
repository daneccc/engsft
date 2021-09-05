import { Router, Request, Response } from "express"

const backupRouter = Router()

backupRouter.get('/backups', (req: Request, res: Response) => {
    res.status(200).send({message: ""})
})

backupRouter.get('/backup/:id', (req: Request, res: Response) => {
    res.status(200).send({message: ""})
})

backupRouter.get('/backup/:id/download', (req: Request, res: Response) => {
    res.status(200).send({message: ""})
})

backupRouter.put('/new', (req: Request, res: Response) => {
    res.status(200).send({message: ""})
})

backupRouter.delete('/cancel', (req: Request, res: Response) => {
    res.status(200).send({message: ""})
})

backupRouter.delete('/cancel/:id', (req: Request, res: Response) => {
    res.status(200).send({message: ""})
})

backupRouter.post('/notify/:id', (req: Request, res: Response) => {
    res.status(200).send({message: ""})
})

export default backupRouter