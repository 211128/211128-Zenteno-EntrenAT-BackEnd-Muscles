"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteUserController = void 0;
class DeleteUserController {
    constructor(deleteUserUseCase) {
        this.deleteUserUseCase = deleteUserUseCase;
    }
    run(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.body;
                if (!id) {
                    return res.status(400).send({
                        status: "error",
                        message: "Se requiere un UUID válido en la solicitud.",
                    });
                }
                const userDeleted = yield this.deleteUserUseCase.run(id);
                if (userDeleted) {
                    return res.status(200).send({
                        status: "success",
                        data: {
                            eliminated: userDeleted + "el usuario con la id:" + id + "se le dió cuello",
                        },
                    });
                }
                else {
                    return res.status(404).send({
                        status: "error",
                        message: "Error al eliminar el usuario",
                    });
                }
            }
            catch (error) {
                console.error("Error al eliminar el usuario:", error);
                return res.status(500).send({
                    status: "error",
                    message: "Se produjo un error en el servidor al eliminar el usuario.",
                });
            }
        });
    }
}
exports.DeleteUserController = DeleteUserController;
