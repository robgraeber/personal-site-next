import Compress from 'compression';
import Express, { Request, Response } from 'express';
import Helmet from 'helmet';
import Logger from 'morgan';
import Next from 'next';
import { AppRouter } from './AppRouter';
import { IS_PRODUCTION } from './EnvConstants';

const nextApp = Next({ dev: !IS_PRODUCTION });
const handleNextJsRequest = nextApp.getRequestHandler();

/**
 * Creates an express app with preset middleware, provides a callback to extend the app.
 * @param appRouter The app router to mount.
 * @param IS_PRODUCTION True/false if running in production mode.
 */
export async function createApp(): Promise<Express.Express> {
  await nextApp.prepare();

  const app = Express();

  app.use(Compress());
  app.use(Logger('dev'));
  app.use(Express.json());
  app.use(Express.urlencoded({ extended: false }));
  app.use(Helmet({ hsts: false }));

  app.use(AppRouter);

  app.all('*', (req, res) => handleNextJsRequest(req, res));

  // Fallback error handler
  app.use((err: any, req: Request, res: Response) => {
    res.status(err.status).json({
      message: err.message,
      error: IS_PRODUCTION ? null : err.stack,
    });
  });

  return app;
}
