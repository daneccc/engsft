import app from "./app"
import prisma from "@libs/prisma"

const port = process.env.PORT || 3000;
async function main() {
    try {
        app.listen(port, () => {
            console.log(`💫 Server listening on port ${port}`)
            console.log("CTRL + C to exit")
        })
    } catch(ex) {
        console.error(ex)
    }
}

main()
    .catch((ex) => {
        throw ex
    })
    .finally(async () => {
        prisma.$disconnect()        // Encerra a conexão do Prisma com o banco de dados
})