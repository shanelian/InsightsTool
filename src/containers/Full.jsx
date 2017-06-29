import React, { Component } from 'react';
import { Link, Switch, Route, Redirect } from 'react-router-dom'
import Header from '../components/Header/Header';
import Sidebar from '../components/Sidebar/Sidebar';
import Aside from '../components/Aside/Aside';
import Order from '../views/Order/Orders'
import Email from '../views/Email/Email'
import Personal from '../views/Personal/Personal'

class Full extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <div className="app-body">
          <Sidebar {...this.props} />
          <main className="main">
            <div className="container-fluid">
              <Switch>
                <Route path="/order" name="Orders" component={Order} />
                <Route path="/email" name="Email" component={Email} />
                <Route path="/personal" name="Personal" component={Personal} />
                <Redirect from="/" to="/order" />
              </Switch>
            </div>
          </main>
          <Aside />
        </div>
      </div>
    );
  }
}

export default Full;
