import { Request, Response } from 'express';
import { ListAllExercisesWithTagUC } from '../../application/listAllExerciseWithTagUC';

export class ListAllExercisesWithtagController {
  constructor(private readonly listAllExercisesWithTagUC: ListAllExercisesWithTagUC) {}

  async listAllExercises(req: Request, res: Response) {
    try {
      const { userid, tagid } = req.body;

      // Llama al caso de uso para obtener datos
      const data = await this.listAllExercisesWithTagUC.run(userid, tagid);

      // Retorna la respuesta
      res.json(data);
    } catch (error) {
      console.error('Error en listAllExercises:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
}
