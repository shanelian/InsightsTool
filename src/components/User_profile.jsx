import React from 'react'

export default class UserProfile extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  render() {
    return (
      <div
        className="container-fluid"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'grey',
          minHeight: '200px',
        }}
      >
        <div
          className="col"
        >
          User Name
        </div>
        <div
          className="col"
        >
          Other info
        </div>
        <div
          className="col"
        >
          Other info
        </div>
      </div>
    )
  }
}
