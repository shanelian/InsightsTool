import React, { Component } from 'react'
import { connect } from 'react-redux'
import { TimelineContainer } from '../../containers/Timeline'
import Detail from '../../containers/Detail'

class Order extends React.Component {
  constructor(props) {
    super(props)
  }

  buildTimeline() {
    if (this.props.userData) {
      return (
        <TimelineContainer
          timelineData={this.props.userData.order}
        />
      )
    }
    return null
  }

  buildDetails() {
    if (this.props.userData) {
      return (
        <Detail
          detailData={this.props.userData.order}
        />
      )
    }
    return null
  }

  render() {
    const timeline = this.buildTimeline()
    const detail = this.buildDetails()
    return (
      <div className="animated fadeIn">
        {timeline}
        {detail}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    userData: state.userData,
  }
}

export const OrderContainer = connect(
  mapStateToProps,
  null,
)(Order)
