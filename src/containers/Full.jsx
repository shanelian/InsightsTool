import React, { Component } from 'react';
import { Link, Switch, Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { HeaderContainer } from '../components/Header/Header'
import Sidebar from '../components/Sidebar/Sidebar'
import Aside from '../components/Aside/Aside'
import { OrderContainer } from '../views/Order/Orders'
import Email from '../views/Email/Email'
import Personal from '../views/Personal/Personal'

class Full extends Component {
  render() {
    return (
      <div className="app">
        <HeaderContainer />
        <div className="app-body">
          <Sidebar {...this.props} />
          <main className="main">
            <div className="container-fluid">
              <Switch>
                <Route path="/order" name="Orders" component={OrderContainer} />
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

const mapStateToProps = (state) => {
  return {
    userData: state.userData,
  }
}

export const AppContainer = connect(
  mapStateToProps,
  null,
)(Full)

