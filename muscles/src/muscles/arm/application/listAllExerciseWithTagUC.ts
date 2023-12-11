import { TagsArm } from "../domain/arm";
import { IArmRepository } from "../domain/armRepository";

export class ListAllExercisesWithTagUC{
    constructor(readonly armRepository: IArmRepository) {}
    
    async run(userid: number, tagid: number): Promise<TagsArm | any> {
        try {
            // Intenta obtener el usuario por su ID
            const getExerciseWithTag = await this.armRepository.listAllExercisesWithTag(tagid, userid)

            if (getExerciseWithTag === null) {
                // Si no se encontró ningún usuario, lanza una excepción personalizada
                throw new Error("no hay tags"); // Puedes personalizar el mensaje de error
            }

            return getExerciseWithTag;
        } catch (error) {
            // Captura y registra el error
            console.error("Error en GetUserByIdWithTagUseCase:", error);
            // Lanza la excepción para que pueda ser manejada en capas superiores si es necesario
            throw error;
        }
    }
}
