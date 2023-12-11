"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const express_http_proxy_1 = __importDefault(require("express-http-proxy"));
const dotenv_1 = __importDefault(require("dotenv"));
const signale_1 = require("signale");
const app = (0, express_1.default)();
const signale = new signale_1.Signale();
dotenv_1.default.config();
const PORT = process.env.PORT || 3000;
app.get('/rutine', (req, res) => {
    res.status(200).send('Rutina ejecutada con éxito');
});
app.use('/api/v1/users', (0, express_http_proxy_1.default)('https://users.entranat.site'));
app.use('/api/v1/exercise', (0, express_http_proxy_1.default)('https://muscles.entranat.site'));
app.use('/api/v1/tags', (0, express_http_proxy_1.default)('https://tags.entranat.site'));
app.listen(PORT, () => {
    signale.success(`Servidor corriendo en http://localhost:${PORT}`);
});
