import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './Header';
import Schedule from './Schedule';

function App(){
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path='/' component={Schedule} />
      </Switch>
    </div>
  );
}

export default App;
