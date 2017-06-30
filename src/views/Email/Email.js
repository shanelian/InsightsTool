import React, { Component } from 'react'
import { connect } from 'react-redux'
import { TimelineContainer } from '../../containers/Timeline'

class Email extends React.Component {
  constructor(props) {
    super(props)
  }

  buildTimeline() {
    if (this.props.userData) {
      return (
        <TimelineContainer
          timelineData={this.props.userData.Email}
        />
      )
    }
    return null
  }

  render() {
    const timeline = this.buildTimeline()
    return (
      <div className="animated fadeIn">
        {timeline}
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    userData: state.userData,
  }
}

export const EmailContainer = connect(
  mapStateToProps,
  null,
)(Email)
