import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../../components';
import Contacts from '../../components/Contacts';
import Portfolio from '../../components/Portfolio';
import Resume from '../../components/Resume';

export const Routing = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/resume" component={Resume} />
      <Route path="/portfolio" component={Portfolio} />
      <Route path="/contacts" component={Contacts} />
    </Switch>
  );
}
