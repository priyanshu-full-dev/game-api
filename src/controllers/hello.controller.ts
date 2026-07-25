import { Request, Response } from 'express';

/**
 * Handles GET request for hello endpoint
 */
export const getHelloMessage = (req: Request, res: Response): void => {
  res.json({
    success: true,
    message: 'Hello from the Hello Controller!',
    timestamp: new Date().toISOString(),
  });
};
