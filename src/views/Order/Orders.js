import React, { Component } from 'react'
import { connect } from 'react-redux'
import Timeline from '../../containers/Timeline'
import Detail from '../../containers/Detail'

class Order extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let response = this.props.userData
    if (!response) {
      response = 'No data yet'
    }
    return (
      <div className="animated fadeIn">
        {response}
        <Timeline
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
