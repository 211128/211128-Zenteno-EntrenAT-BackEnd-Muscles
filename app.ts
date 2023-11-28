import express from 'express';
import { Signale } from 'signale';
import { armRouter } from './src/honortags/infraestructure/armRoutes';

const app = express();
const signale = new Signale();

app.use(express.json());

// Rutas relacionadas con usuarios
app.use('/api/v1/tags', armRouter)


app.listen(3006, () => {
    signale.success("Server online in port 3006");
});

