import express from 'express';
import { Signale } from 'signale';
import { armRouter } from './src/muscles/arm/infraestructure/armRoutes';
import { userRouter } from './src/usuarios/infrastructure/userRoutes';
import { tagRouter } from './src/honortags/infraestructure/armRoutes';


const app = express();
const signale = new Signale();

app.use(express.json());

// Rutas relacionadas con usuarios

app.use(armRouter);
app.use(tagRouter)
app.use(userRouter);

app.listen(8082, () => {
    signale.success("Server for muscles service online in port 8082");
});

