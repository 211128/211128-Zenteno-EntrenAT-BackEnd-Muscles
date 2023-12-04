import express from "express";
import { registerController, setAsInactiveController } from "./controllers/dependencies";
import { listAllUserController } from "./controllers/dependencies";
import { getUserByIdController } from "./controllers/dependencies";
import { deleteUserByIdController } from "./controllers/dependencies";
import { updateUserController } from "./controllers/dependencies";
import { updatePasswordController } from "./controllers/dependencies";
import { loginController } from "./controllers/dependencies";


export const userRouter = express.Router();

// Ruta para registrar un usuario
userRouter.post("/register", registerController.run.bind(registerController));

userRouter.post('/login',loginController.run.bind(loginController))

userRouter.put('/setinactive', setAsInactiveController.run.bind(setAsInactiveController))

// Ruta para obtener todos los usuarios
userRouter.get("/list", listAllUserController.run.bind(listAllUserController));

// Ruta para obtener un usuario por su ID
userRouter.get("/:id", getUserByIdController.run.bind(getUserByIdController));

// Ruta para eliminar un usuario por su ID
userRouter.delete("/:id", deleteUserByIdController.run.bind(deleteUserByIdController));

// Ruta para actualizar un usuario por su ID
userRouter.put("/:id", updateUserController.run.bind(updateUserController));

// Ruta para actualizar la contraseña de un usuario por su ID
userRouter.post("/:id/update-password", updatePasswordController.run.bind(updatePasswordController));

