import '@formatjs/intl-pluralrules/locale-data/en';
import '@formatjs/intl-pluralrules/polyfill';
import React from 'react';
import { IntlProvider as Provider } from 'react-intl';
import messages from '../../i18n';

// TODO: load translation dynamically when we allow change languages in application.
export const IntlProvider: React.FC = ({ children }) => {
  return (
    <Provider locale={'en'} messages={messages.en_US}>
      {children}
    </Provider>
  );
};
