import { Router, Request, Response } from 'express';

const router = Router();

router.post('/', (req: Request, res: Response) => {
  const { description } = req.body as { description?: string };

  if (!description || description.trim() === '') {
    res.status(400).json({ error: 'description is required' });
    return;
  }

  res.status(202).json({ message: 'received' });
});

export default router;
