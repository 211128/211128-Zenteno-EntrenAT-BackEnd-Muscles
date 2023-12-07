"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listExercisesWithTagController = exports.listAllExerciseWithTagUC = exports.listAllExercisesController = exports.listAllExercisesUC = exports.listAllExercisesByIdController = exports.listAllExercisesByIdUC = exports.registerController = exports.registerExercisesUC = exports.mySqlRepository = void 0;
const listAllExercisesByIdUC_1 = require("../../application/listAllExercisesByIdUC");
const listAllExercisesUC_1 = require("../../application/listAllExercisesUC");
const registerExercisesUC_1 = require("../../application/registerExercisesUC");
const listAllExerciseWithTagUC_1 = require("../../application/listAllExerciseWithTagUC");
const mySqlRepository_1 = require("../mySqlRepository");
const listAllExercisesByIdContreoller_1 = require("./listAllExercisesByIdContreoller");
const listAllExercisesController_1 = require("./listAllExercisesController");
const registerExercisesController_1 = require("./registerExercisesController");
const listExercisesWithTagController_1 = require("./listExercisesWithTagController");
exports.mySqlRepository = new mySqlRepository_1.MysqlRepository();
exports.registerExercisesUC = new registerExercisesUC_1.RegisterExercisesUC(exports.mySqlRepository);
exports.registerController = new registerExercisesController_1.RegisterController(exports.registerExercisesUC);
exports.listAllExercisesByIdUC = new listAllExercisesByIdUC_1.ListAllExercisesByIdUC(exports.mySqlRepository);
exports.listAllExercisesByIdController = new listAllExercisesByIdContreoller_1.ListAllExercisesByIdController(exports.listAllExercisesByIdUC);
exports.listAllExercisesUC = new listAllExercisesUC_1.ListAllExercisesUC(exports.mySqlRepository);
exports.listAllExercisesController = new listAllExercisesController_1.ListAllExercisesController(exports.listAllExercisesUC);
exports.listAllExerciseWithTagUC = new listAllExerciseWithTagUC_1.ListAllExercisesWithTagUC(exports.mySqlRepository);
exports.listExercisesWithTagController = new listExercisesWithTagController_1.ListAllExercisesWithtagController(exports.listAllExerciseWithTagUC);
