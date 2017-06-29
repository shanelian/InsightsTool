import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'

class Sidebar extends Component {

  handleClick(e) {
    e.preventDefault();
    e.target.parentElement.classList.toggle('open');
  }

  activeRoute(routeName) {
    return this.props.location.pathname.indexOf(routeName) > -1 ? 'nav-item nav-dropdown open' : 'nav-item nav-dropdown';
  }

  render() {
    return (

      <div className="sidebar">
        <nav className="sidebar-nav">
          <ul className="nav">
            <li className="nav-item">
              <NavLink to={'/order'} className="nav-link" activeClassName="active">
                <i className="icon-handbag"></i>
                Orders
              </NavLink>
              <NavLink to={'/email'} className="nav-link" activeClassName="active">
                <i className="icon-envelope"></i>
                Emails
              </NavLink>
              <NavLink to={'/personal'} className="nav-link" activeClassName="active">
                <i className="icon-user"></i>
                Personal
              </NavLink>
              <NavLink to={'/customer_service'} className="nav-link" activeClassName="active">
                <i className="icon-phone"></i>
                Customer Service
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    )
  }
}

export default Sidebar;
