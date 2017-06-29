import React, { Component } from 'react'
import { connect } from 'react-redux'
import Timeline from '../../containers/Timeline'
import Detail from '../../containers/Detail'

class CustomerService extends Component {
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
        <Timeline
          timelineType="Customer Service"
        />
        <Detail
          timelineType="Customer Service"
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

export const CustomerServiceContainer = connect(
  mapStateToProps,
  null,
)(CustomerService)
