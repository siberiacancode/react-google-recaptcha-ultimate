import { createContext } from 'react';

import type { GoogleReCaptcha, Container } from '../utils';

export interface GoogleReCaptchaContextProps {
  googleReCaptcha: any;
  siteKey: string;
  isLoading: boolean;
  language?: GoogleReCaptcha.Language;
  executeV3?: (action: GoogleReCaptcha.Action['action']) => Promise<string>;
  executeV2Invisible?: (optWidgetId?: GoogleReCaptcha.OptWidgetId) => Promise<void>;
  reset?: (optWidgetId?: GoogleReCaptcha.OptWidgetId) => void;
  getResponse?: (optWidgetId?: GoogleReCaptcha.OptWidgetId) => void;
  render?: (
    container: Container,
    parameters?: GoogleReCaptcha.Parameters,
    inherit?: boolean
  ) => void;
}

export const GoogleReCaptchaContext = createContext<GoogleReCaptchaContextProps>({
  googleReCaptcha: {},
  siteKey: '',
  language: '',
  isLoading: true,
  executeV3: () => {
    throw Error(
      'GoogleReCaptcha Context has not yet been implemented, if you are using useGoogleReCaptcha hook, make sure the hook is called inside component wrapped by GoogleRecaptchaProvider'
    );
  },
  executeV2Invisible: () => {
    throw Error(
      'GoogleReCaptchaContext has not yet been implemented, if you are using useGoogleReCaptcha hook, make sure the hook is called inside component wrapped by GoogleRecaptchaProvider'
    );
  },
  reset: () => {
    throw Error(
      'GoogleReCaptcha Context has not yet been implemented, if you are using useGoogleReCaptcha hook, make sure the hook is called inside component wrapped by GoogleRecaptchaProvider'
    );
  },
  getResponse: () => {
    throw Error(
      'GoogleReCaptcha Context has not yet been implemented, if you are using useGoogleReCaptcha hook, make sure the hook is called inside component wrapped by GoogleRecaptchaProvider'
    );
  },
  render: () => {
    throw Error(
      'GoogleReCaptcha Context has not yet been implemented, if you are using useGoogleReCaptcha hook, make sure the hook is called inside component wrapped by GoogleRecaptchaProvider'
    );
  }
});

export const {
  Provider: GoogleReCaptchaContextProvider,
  Consumer: GoogleReCaptchaContextConsumer
} = GoogleReCaptchaContext;
