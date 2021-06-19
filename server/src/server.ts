import express, {Request, Response} from "express"
import { secondsToTime } from "./libs/format"

const app = express()

/* Remove tag desnecessaria */
app.disable('x-powered-by')

/* Declaração de rotas e seus respectivos Controllers */
app.all('/', (req: Request, res: Response) => {
    res.status(200).json({ message: "Olá mundo!" })
})

app.get('/health', (req: Request, res: Response) => {
    // TODO: Implementar metadados para debug
    res.status(200).json({
        time: '' + secondsToTime(process.uptime())
    })
})

/* Tenta inicializar o servidor */
const port = process.env.PORT || 3000;
try {
    app.listen(port || 3000)
} catch (err) {
    console.log(err)
}