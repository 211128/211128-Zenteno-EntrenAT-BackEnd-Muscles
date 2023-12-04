import express from 'express';
import { Signale } from 'signale';
import { armRouter } from './src/honortags/infraestructure/armRoutes';

const app = express();
const signale = new Signale();

app.use(express.json());

// Rutas relacionadas con usuarios
app.use( armRouter)


app.listen(8080, () => {
    signale.success("Server online in port 8080");
});

