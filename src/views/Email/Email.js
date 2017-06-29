import React, { Component } from 'react'
import Timeline from '../../containers/Timeline'

class Email extends Component {

  render() {
    return (
      <div className="animated fadeIn">
        <Timeline
          timelineType="Email"
        />
      </div>
    )
  }
}

export default Email;
