import React, {Component} from 'react'
import { connect } from 'react-redux'

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
