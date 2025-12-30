/**
 * Environment variable utilities with validation
 * Ensures required environment variables are present
 */

interface EnvConfig {
  web3formsAccessKey: string;
  appEnv: string;
  appUrl: string;
}

/**
 * Validates and retrieves environment variables
 * Throws error if required variables are missing
 */
export const getEnvConfig = (): EnvConfig => {
  const web3formsAccessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;
  const appEnv = import.meta.env.VITE_APP_ENV || import.meta.env.MODE || 'development';
  const appUrl = import.meta.env.VITE_APP_URL || '';

  // Validate required environment variables
  if (!web3formsAccessKey && appEnv === 'production') {
    console.error('Missing required environment variable: VITE_WEB3FORMS_ACCESS_KEY');
    // In production, this should throw, but in development we allow it
    if (appEnv === 'production') {
      throw new Error('Missing required environment variable: VITE_WEB3FORMS_ACCESS_KEY');
    }
  }

  return {
    web3formsAccessKey: web3formsAccessKey || '',
    appEnv,
    appUrl
  };
};

/**
 * Checks if running in production
 */
export const isProduction = (): boolean => {
  return import.meta.env.PROD || import.meta.env.VITE_APP_ENV === 'production';
};

/**
 * Checks if running in development
 */
export const isDevelopment = (): boolean => {
  return import.meta.env.DEV || import.meta.env.VITE_APP_ENV === 'development';
};

