import express from 'express';
import cors from 'cors';
import wasteRouter from './routes/waste-route';

const app = express();

app.use(express.json());
app.use(cors());
app.use(wasteRouter);

export default app;