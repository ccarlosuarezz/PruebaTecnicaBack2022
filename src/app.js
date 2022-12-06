import express from 'express';
import cors from 'cors';
import usersRoutes from './routes/users.routes';
import placesRoutes from './routes/places.routes';

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/users', usersRoutes);
app.use('/places', placesRoutes);

export default app;

