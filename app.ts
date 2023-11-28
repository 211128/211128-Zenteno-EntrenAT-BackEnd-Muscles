import express from 'express';
import { Signale } from 'signale';
import { armRouter } from './src/muscles/arm/infraestructure/armRoutes';

const app = express();
const signale = new Signale();

app.use(express.json());

// Rutas relacionadas con usuarios

app.use('/api/v1/exercise', armRouter)


app.listen(3007, () => {
    signale.success("Server for muscles service online in port 3007");
});

