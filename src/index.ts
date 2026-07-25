import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import apiRouter from './routes/index.js';

// Load environment variables
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Middleware to parse JSON
app.use(express.json());

// API Routes mounting
app.use('/api', apiRouter);

// Basic health check route
app.get('/', (req: Request, res: Response) => {
  res.json({
    status: 'healthy',
    message: 'Welcome to the Node.js API!',
    timestamp: new Date().toISOString(),
  });
});

if (!process.env.VERCEL) {
  const server = app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
  });

  const shutdown = () => {
    console.log('[server]: Shutdown signal received. Closing HTTP server...');
    server.close(() => {
      console.log('[server]: HTTP server closed. Process terminating...');
      process.exit(0);
    });
  };

  process.on('SIGINT', shutdown);
  process.on('SIGTERM', shutdown);
}

export default app;
