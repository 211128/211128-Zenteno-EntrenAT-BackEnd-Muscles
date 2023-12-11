import { Tag } from "../domain/arm";
import { ITagRepository } from "../domain/armRepository";

export class ListAllExercisesUC {
  constructor(private readonly armRepository: ITagRepository) {}

  async run(): Promise<Tag[] | null> {
    try {
      const listAllExercisesArm = await this.armRepository.listAllTags();
      if (listAllExercisesArm) {
        return listAllExercisesArm;
      } else {
        throw new Error("No se encontraron tags realizados.");
      }
    } catch (err: any) {
      // Lanza una excepción con un mensaje de error específico.
      throw new Error("Error al obtener la lista de tags: " + err.message);
    }
  }
}

