import express from 'express';
import cors from 'cors';
import elementRoutes from './routes/element.routes';

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/element', elementRoutes);

export default app;

