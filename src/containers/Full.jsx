import React, { Component } from 'react';
import { Link, Switch, Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { HeaderContainer } from '../components/Header/Header'
import { SidebarContainer } from '../components/Sidebar/Sidebar'
import Aside from '../components/Aside/Aside'
import { OrderContainer } from '../views/Order/Orders'
import { UserProfileContainer } from '../components/User_profile'
import { TimelineContainer } from './Timeline'

class Full extends Component {
  render() {
    return (
      <div className="app">
        <HeaderContainer />
        <div className="app-body">
          <SidebarContainer {...this.props} />
          <main className="main">
            <UserProfileContainer />
            <div className="container-fluid">
              <Switch>
                <Route path="/order" name="Orders" component={OrderContainer} />
                <Redirect from="/" to="/order" />
              </Switch>
              <TimelineContainer />
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

