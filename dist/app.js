"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const signale_1 = require("signale");
const armRoutes_1 = require("./src/honortags/infraestructure/armRoutes");
const app = (0, express_1.default)();
const signale = new signale_1.Signale();
app.use(express_1.default.json());
// Rutas relacionadas con usuarios
app.use(armRoutes_1.armRouter);
app.listen(8080, () => {
    signale.success("Server online in port 8080");
});
