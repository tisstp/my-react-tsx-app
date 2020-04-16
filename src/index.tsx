import React from 'react';
import ReactDOM from 'react-dom';
import { IntlProvider } from 'react-intl';
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom';

import App from './containers/app/App';
import * as serviceWorker from './serviceWorker';
import configureAppStore from './store/configure-store';
import { MessageFormatElement } from 'intl-messageformat-parser';
import messages1 from './i18n/en-US.json'; // todo remove it.

// todo move it.
const messages: Record<string, string> | Record<string, MessageFormatElement[]> = {
  app_title: 'App Title Test Intl'
};

ReactDOM.render(
  <Provider store={configureAppStore()}>
    <Router>
      <IntlProvider locale="en-US" messages={messages}>
        {console.log(messages1)}
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
