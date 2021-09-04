import express, {Request, Response} from "express"
import morgan from "morgan"

const logger = morgan(
    (tokens, req: Request, res: Response) => {
        return [
        tokens.method(req, res),
        tokens.url(req, res),
        tokens.status(req, res),
        tokens.res(req, res, 'content-length'), '-',
        tokens['response-time'](req, res), 'ms',
        ].join(' ')
  }
)

export default logger