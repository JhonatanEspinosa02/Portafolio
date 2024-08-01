import { Document } from "mongoose"


export type DataSchemaType = Document & {
    fullname: string,
    email: string,
    message: string
}