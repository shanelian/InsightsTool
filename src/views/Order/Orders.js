import React, { Component } from 'react'
import { connect } from 'react-redux'
import { TimelineContainer } from '../../containers/Timeline'
import Detail from '../../containers/Detail'

class Order extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="animated fadeIn">
        <TimelineContainer
          timelineType="Orders"
        />
        <Detail
          timelineType="Orders"
        />
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
