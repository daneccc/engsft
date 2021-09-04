import {PublicKey} from "@models/PublicKey"

interface User {
    uid: String
    email: String
    firstName: String
    lastName: String
    pHash: String
    pSalt: String,
    createdAt: Date,
    publicKey: PublicKey
}

export {User}