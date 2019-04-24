import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

//Global Styles
import './styles/bulma.scss';

//Pages - Components
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Team from './pages/Team';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/team" component={Team} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
