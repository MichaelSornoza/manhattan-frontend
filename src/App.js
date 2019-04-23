import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

//Global Styles
import './styles/bulma.scss';

//Pages - Components
import HomeContainer from './pages/Home';
import LoginContainer from './pages/Login';
import RegisterContainer from './pages/Register';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomeContainer} />
        <Route exact path="/login" component={LoginContainer} />
        <Route exact path="/register" component={RegisterContainer} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
