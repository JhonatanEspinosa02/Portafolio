import { string, object } from "valibot"

export const DraftClientSchema = object({
    fullname: string(),
    email: string(),
    message: string(),
})

export type TypeInfo = {
    key: number
    technologie: string,
    img: string
}

export type TypeProjects = Pick<TypeInfo, 'img' | 'key'> & {
    project: string,
    techStack: string
}

export type ClientFormType = {
    fullname: string,
    email: string,
    message: string,
}

