import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import './App.css';
import { Routing } from '../routes/Routing';
import { FormattedMessage } from 'react-intl';

function App() {
  return (
    <>
      <CssBaseline />
      <br/>
      <FormattedMessage id="app_title" />
      <br/>
      <Routing />
    </>
  );
}

export default App;
