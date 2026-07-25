import { Request, Response } from 'express';
import axios from 'axios';

/**
 * Fetches live inplay matches from the external API and returns them on the response.
 */
export const getInplayMatches = async (req: Request, res: Response): Promise<void> => {
  try {
    const url = 'https://central.zplay1.in/pb/api/v1/events/matches/inplay';
    const response = await axios.get(url);

    // Axios response data is parsed JSON
    const { data } = response.data as {
      data?: { inplay?: any[]; recommended?: any[] };
    };
    const { inplay = [], recommended = [] } = data || {};
    res.json({ inplay, recommended });
  } catch (error: any) {
    console.error('Error fetching inplay matches:', error);

    // Check if error response from Axios is available
    if (axios.isAxiosError(error) && error.response) {
      res.status(error.response.status).json({
        success: false,
        error: error.response.statusText || 'Error from match provider API',
      });
      return;
    }

    res.status(500).json({
      success: false,
      error: 'An internal server error occurred while fetching inplay matches.',
    });
  }
};
