import { User } from "./User";

interface Backup {
    bid: String
    createdAt: Date
    creator: User

    bucket: String
    filename: String
    dataUrl: String
    signedUrl: String

    status: String
}

export {Backup}