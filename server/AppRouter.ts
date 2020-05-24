import Express from 'express';
import * as MainController from './controllers/MainController';

/**
 * Singleton router for all routes.
 */
export const AppRouter = Express.Router();

// API routes
AppRouter.post('/api/sendEmail', MainController.sendEmail);
