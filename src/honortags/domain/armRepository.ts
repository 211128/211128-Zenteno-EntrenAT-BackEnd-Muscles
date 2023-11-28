import { Tag } from "./arm";


export interface ITagRepository {
    registerTag(
        descripcion: string,
        autor: string,

    
    ): Promise<Tag | any>

    listAllTagById(
        id: number
    ): Promise<Tag | any>

    listAllTags(
    ): Promise<Tag[] | any>
    
}