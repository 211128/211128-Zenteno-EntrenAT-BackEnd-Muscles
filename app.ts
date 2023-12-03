import express, {Application} from 'express';
import proxy from 'express-http-proxy';

import dotenv from 'dotenv';
import { Signale } from "signale";

const app:Application = express();
const signale = new Signale();
import { Request, Response } from "express";


dotenv.config();
const PORT = process.env.PORT || 3000;
app.get('/rutine', (req: Request, res: Response) => {
  res.status(200).send('Rutina ejecutada con éxito');
})
app.use('/api/v1/users',proxy('https://users.entranat.site'))
app.use('/api/v1/exercise',proxy('https://muscle.entranat.site'));
app.use('/api/v1/tags',proxy('https://tags.entranat.site'));



app.listen(PORT,() => {
  signale.success(`Servidor corriendo en http://localhost:${PORT}`);
});