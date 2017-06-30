import React, { Component } from 'react';
import { Link, Switch, Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { HeaderContainer } from '../components/Header/Header'
import { SidebarContainer } from '../components/Sidebar/Sidebar'
import { OrderContainer } from '../views/Order/Orders'
import { UserProfileContainer } from '../components/User_profile'
import { EmailContainer } from '../views/Email/Email'
import { CustomerServiceContainer } from '../views/Customer Service/Customer_Service'

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
                <Route path="/order" name="Orders" component={OrderContainer} userData={this.props.userData} />
                <Route path="/email" name="Email" component={EmailContainer} userData={this.props.userData} />
                <Route path="/customer_service" name="Customer Service" component={CustomerServiceContainer} userData={this.props.userData} />
                <Redirect from="/" to="/order" />
              </Switch>
            </div>
          </main>
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

