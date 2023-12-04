"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
const express_1 = __importDefault(require("express"));
const dependencies_1 = require("./controllers/dependencies");
const dependencies_2 = require("./controllers/dependencies");
const dependencies_3 = require("./controllers/dependencies");
const dependencies_4 = require("./controllers/dependencies");
const dependencies_5 = require("./controllers/dependencies");
const dependencies_6 = require("./controllers/dependencies");
const dependencies_7 = require("./controllers/dependencies");
exports.userRouter = express_1.default.Router();
// Ruta para registrar un usuario
exports.userRouter.post("/register", dependencies_1.registerController.run.bind(dependencies_1.registerController));
exports.userRouter.post('/login', dependencies_7.loginController.run.bind(dependencies_7.loginController));
exports.userRouter.put('/setinactive', dependencies_1.setAsInactiveController.run.bind(dependencies_1.setAsInactiveController));
// Ruta para obtener todos los usuarios
exports.userRouter.get("/list", dependencies_2.listAllUserController.run.bind(dependencies_2.listAllUserController));
// Ruta para obtener un usuario por su ID
exports.userRouter.get("/:id", dependencies_3.getUserByIdController.run.bind(dependencies_3.getUserByIdController));
// Ruta para eliminar un usuario por su ID
exports.userRouter.delete("/:id", dependencies_4.deleteUserByIdController.run.bind(dependencies_4.deleteUserByIdController));
// Ruta para actualizar un usuario por su ID
exports.userRouter.put("/:id", dependencies_5.updateUserController.run.bind(dependencies_5.updateUserController));
// Ruta para actualizar la contraseña de un usuario por su ID
exports.userRouter.post("/:id/update-password", dependencies_6.updatePasswordController.run.bind(dependencies_6.updatePasswordController));
