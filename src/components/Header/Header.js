import React, {Component} from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton'

class Header extends Component {
  constructor(props) {
    super(props)

    this.state = {
      userId: 0
    }
  }

  sidebarToggle(e) {
    e.preventDefault();
    document.body.classList.toggle('sidebar-hidden');
  }

  sidebarMinimize(e) {
    e.preventDefault();
    document.body.classList.toggle('sidebar-minimized');
  }

  mobileSidebarToggle(e) {
    e.preventDefault();
    document.body.classList.toggle('sidebar-mobile-show');
  }

  asideToggle(e) {
    e.preventDefault();
    document.body.classList.toggle('aside-menu-hidden');
  }

  handleSearchBarInput (event, newValue) {
    this.setState({
      userId: newValue
    })
  }

  handleSubmitUserId () {
    console.log('Clicked')
  }

  render() {
    return (
      <header className="app-header navbar">
        <button className="navbar-toggler mobile-sidebar-toggler d-lg-none" onClick={this.mobileSidebarToggle}
                type="button">&#9776;</button>
        <a className="navbar-brand" href="#"
           style={{
             float: 'left'
           }}
        >
        </a>
        <h5>Honest Insights</h5>
        <ul className="nav navbar-nav d-md-down-none mr-auto">
          <li className="nav-item">
            <button className="nav-link navbar-toggler sidebar-toggler" type="button"
                    onClick={this.sidebarToggle}>&#9776;</button>
          </li>
          <li>
            <div
              style={{
                marginLeft: '200px',
                padding: '5px',
              }}
            >
              <i
                className="material-icons"
                style={{
                  color: '#CCCCCC',
                  position: 'relative',
                  bottom: '-7'
                }}
              >
                search
              </i>
              <TextField
                hintText="Search User ID"
                style={{
                  marginRight: '20px'
                }}
                onChange={this.handleSearchBarInput.bind(this)}
              >
              </TextField>
              <RaisedButton
                label="Search"
                primary={true}
                onTouchTap={this.handleSubmitUserId.bind(this)}
              />
            </div>
          </li>
        </ul>
      </header>
    )
  }
}

export default Header;
