import express from "express";
import { listAllExercisesByIdController, listAllExercisesController, registerController} from "./controllers/dependencies";



export const tagRouter = express.Router();

// Ruta para registrar un usuario
tagRouter.post("/add", registerController.run.bind(registerController));

tagRouter.get("/list", listAllExercisesController.run.bind(listAllExercisesController));

tagRouter.get("/:id", listAllExercisesByIdController.run.bind(listAllExercisesByIdController));


// Ruta para obtener un usuario por su ID

