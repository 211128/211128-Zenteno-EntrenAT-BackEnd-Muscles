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
exports.ListAllExercisesWithTagUC = void 0;
class ListAllExercisesWithTagUC {
    constructor(armRepository) {
        this.armRepository = armRepository;
    }
    run(userid, tagid) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // Intenta obtener el usuario por su ID
                const getExerciseWithTag = yield this.armRepository.listAllExercisesWithTag(tagid, userid);
                if (getExerciseWithTag === null) {
                    // Si no se encontró ningún usuario, lanza una excepción personalizada
                    throw new Error("no hay tags"); // Puedes personalizar el mensaje de error
                }
                return getExerciseWithTag;
            }
            catch (error) {
                // Captura y registra el error
                console.error("Error en GetUserByIdWithTagUseCase:", error);
                // Lanza la excepción para que pueda ser manejada en capas superiores si es necesario
                throw error;
            }
        });
    }
}
exports.ListAllExercisesWithTagUC = ListAllExercisesWithTagUC;
