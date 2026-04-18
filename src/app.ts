import express from 'express';
import matchRouter from './routes/match';

const app = express();

app.use(express.json());

app.get('/health', (_req, res) => {
  res.json({ status: 'ok' });
});

app.use('/match', matchRouter);

export default app;
