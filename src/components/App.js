import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import RedFlag from './home/RedFlags';
import SignIn from './signin/SignIn';
import SignUp from './signup/Signup';
import PageNotFound from './PageNotFound';


class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={SignIn} />
          <Route path="/signup" component={SignUp} />
          <Route path="/redflag" component={RedFlag} />
          <Route component={PageNotFound} />
        </Switch>
      </div>
    );
  }
}

export default App;
