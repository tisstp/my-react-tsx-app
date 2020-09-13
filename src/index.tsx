import React from 'react';
import ReactDOM from 'react-dom';
import { IntlProvider } from 'react-intl';
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom';

import App from './containers/app/App';
import * as serviceWorker from './serviceWorker';
import configureAppStore from './store/configure-store';
import messages from './i18n/en-US.json';
import { flattenMessages } from './helpers/internationalization';

ReactDOM.render(
  <Provider store={configureAppStore()}>
    <Router>
      <IntlProvider locale="en-US" messages={flattenMessages(messages)}>
        <App />
      </IntlProvider>
    </Router>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
serviceWorker.register();
