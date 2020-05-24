import { createApp } from './AppFactory';
import { PORT, assertEnvVariables } from './EnvConstants';

assertEnvVariables();

createApp().then((app) => {
  app.listen(PORT, () => {
    console.log(`Express server listening on port ${PORT}`);

    if (PORT !== '80') {
      console.log(`Viewable at http://localhost:${PORT}`);
    }
  });
});
