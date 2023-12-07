import express from "express";
import { listAllExercisesByIdController, listAllExercisesController, listExercisesWithTagController, registerController} from "./controllers/dependencies";




export const armRouter = express.Router();

// Ruta para registrar un usuario
armRouter.post("/add", registerController.run.bind(registerController));

armRouter.get("/muscle/list", listAllExercisesController.run.bind(listAllExercisesController));

armRouter.get("/get/:id", listAllExercisesByIdController.run.bind(listAllExercisesByIdController));

armRouter.post("/user/tag", listExercisesWithTagController.listAllExercises.bind(listExercisesWithTagController));


// Ruta para obtener un usuario por su ID

