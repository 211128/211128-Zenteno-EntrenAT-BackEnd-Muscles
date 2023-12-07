import { Tag } from "../domain/arm";
import { ITagRepository } from "../domain/armRepository";

export class RegisterExercisesUC {
    constructor(readonly exerciseRepository: ITagRepository){}


    async run (
        
        descripcion: string,
        autor: string,
        
    ): Promise <Tag | any>{
        try {
            const createNewExercise = await this.exerciseRepository.registerTag(
                descripcion,
                autor,
      
              
            )

            return createNewExercise;
        }catch(error){
            console.log("Error al registrar tag", error)
            return null
        }
        
    };


}