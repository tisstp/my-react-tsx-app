import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Contacts from '../../pages/contacts/Contacts';
import Home from '../../pages/home/Home';
import Portfolio from '../../pages/portfolio/Portfolio';
import Resume from '../../pages/resume/Resume';

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
