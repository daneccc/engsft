import {Request, Response, NextFunction} from "express"

const renewToken = (req: Request, res: Response, next: NextFunction) => {
    next()
}

const verifyToken = (req: Request, res: Response, next: NextFunction) => {
    next()
}

export {renewToken, verifyToken}