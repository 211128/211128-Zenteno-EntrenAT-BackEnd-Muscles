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
exports.ListAllExercisesWithtagController = void 0;
class ListAllExercisesWithtagController {
    constructor(listAllExercisesWithTagUC) {
        this.listAllExercisesWithTagUC = listAllExercisesWithTagUC;
    }
    listAllExercises(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { userid, tagid } = req.body;
                // Llama al caso de uso para obtener datos
                const data = yield this.listAllExercisesWithTagUC.run(userid, tagid);
                // Retorna la respuesta
                res.json(data);
            }
            catch (error) {
                console.error('Error en listAllExercises:', error);
                res.status(500).json({ error: 'Internal Server Error' });
            }
        });
    }
}
exports.ListAllExercisesWithtagController = ListAllExercisesWithtagController;
