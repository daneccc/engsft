import { User } from "@models/User"

interface PublicKey {
    kid: String
    user: User
    data: String
    createAt: Date
}

export {PublicKey}