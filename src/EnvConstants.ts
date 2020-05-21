export const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY || 'missing_api_key';
export const CONTACT_EMAIL = process.env.CONTACT_EMAIL || 'foo@example.com';
console.log('NODE_ENV', process.env.NODE_ENV);
/**
 * Asserts all the env variables that should be defined.
 */
function assertEnvVariables(): void {
  if (!process.env.SENDGRID_API_KEY) {
    console.warn('Env variable: SENDGRID_API_KEY is undefined, please set it in production.');
  }

  if (!process.env.CONTACT_EMAIL) {
    console.warn('Env variable: CONTACT_EMAIL is undefined, please set it in production.');
  }
}

assertEnvVariables();
