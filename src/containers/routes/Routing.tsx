import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Contacts from '../../features/contacts/Contacts';
import Home from '../../features/home/Home';
import Portfolio from '../../features/portfolio/Portfolio';
import Resume from '../../features/resume/Resume';

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
