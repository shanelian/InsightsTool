import React, { Component } from 'react'
import Timeline from '../../containers/Timeline'

class Personal extends Component {

  render() {
    return (
      <div className="animated fadeIn">
        <Timeline
          timelineType="Personal"
        />
      </div>
    )
  }
}

export default Personal;
