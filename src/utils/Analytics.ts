import ReactGA from 'react-ga';

let initialized = false;

export const initGA = () => {
  const googleAnalyticsId = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID;

  if (googleAnalyticsId) {
    console.log('GA initialized');
    ReactGA.initialize(googleAnalyticsId);
    initialized = true;
  } else {
    console.warn(
      'Env variable: NEXT_PUBLIC_GOOGLE_ANALYTICS_ID is undefined, please set it in production.'
    );
  }
};

export const logPageView = () => {
  if (initialized) {
    ReactGA.set({ page: window.location.pathname });
    ReactGA.pageview(window.location.pathname);
  }
};

export const logEvent = (category: string, action: string) => {
  if (initialized) {
    ReactGA.event({ category, action });
  }
};

export const logException = (description = '', fatal = false) => {
  if (initialized) {
    ReactGA.exception({ description, fatal });
  }
};
