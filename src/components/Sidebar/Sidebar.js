import React, {Component} from 'react';
import {NavLink} from 'react-router-dom'
import {
  Checkbox,
} from 'material-ui'
import { connect } from 'react-redux'

class Sidebar extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
    }
  }

  handleOrderClick(e) {
    console.log('Now order is :', this.props.orderCheck)
    this.props.dispatch({
      type: 'TOGGLE_ORDER',
    })
  }

  handleEmailClick(e) {
    this.props.dispatch({
      type: 'TOGGLE_EMAIL',
    })
  }

  handleCSClick(e) {
    this.props.dispatch({
      type: 'TOGGLE_CS',
    })
  }

  render() {
    return (
      <div className="sidebar">
        <nav className="sidebar-nav">
          <ul className="nav">
            <li className="nav-item">
              <NavLink to={'/dashboard'} className="nav-link">
                <Checkbox
                  label="Orders"
                  labelStyle={{
                    color: 'white',
                  }}
                  iconStyle={{ fill: '#F86C6B' }}
                  onCheck={this.handleOrderClick.bind(this)}
                  checked={this.props.orderCheck}
                />
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={'/dashboard'} className="nav-link" activeClassName="active">
                <Checkbox
                  label="Email"
                  labelStyle={{
                    color: 'white',
                  }}
                  iconStyle={{ fill: '#F86C6B' }}
                  onCheck={this.handleEmailClick.bind(this)}
                  checked={this.props.emailCheck}
                />
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={'/dashboard'} className="nav-link" activeClassName="active">
                <Checkbox
                  label="Customer Service"
                  labelStyle={{
                    color: 'white',
                  }}
                  iconStyle={{ fill: '#F86C6B' }}
                  onCheck={this.handleCSClick.bind(this)}
                  checked={this.props.csCheck}
                />
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  orderCheck: state.orderCheck,
  emailCheck: state.emailCheck,
  csCheck: state.csCheck,
})

export const SidebarContainer = connect(
  mapStateToProps,
  null,
)(Sidebar)
