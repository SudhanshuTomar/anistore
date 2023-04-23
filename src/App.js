import React from 'react';
import './App.css';
import Homepage from './pages/Homepage/Homepage';
import {Switch,Route} from 'react-router';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Homepage} />
      </Switch>
    </div>
  );
}

export default App;
