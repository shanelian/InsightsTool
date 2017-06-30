import {
  Paper,
  IconButton,
  FlatButton,
} from 'material-ui'
import React from 'react'
import Tooltip from 'rc-tooltip'
import {connect} from 'react-redux'


export default class Timeline extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      destroyTooltipOnHide: true,
    }
  }

  buildPaper() {
    if (this.props.userData) {
      return (
        <Paper
          zDepth={3}
          style={{
            marginTop: '10px',
            minHeight: '400px',
            width: '95%',
          }}
        >
          <div
            style={{
              display: 'flex',
            }}
          >
            <div
              className="col"
              style={{
                padding: '20px',
                display: 'flex',
                justifyContent: 'flex-start',
              }}
            >
              <IconButton>
                <i className="material-icons">keyboard_arrow_left</i>
              </IconButton>
              <p style={{fontSize: '24px', position: 'relative', bottom: '-4'}}>4/20/17 - 4/26/17</p>
              <IconButton>
                <i className="material-icons">keyboard_arrow_right</i>
              </IconButton>
            </div>

            <div
              className="col"
              style={{
                padding: '20px',
                display: 'flex',
                justifyContent: 'flex-end',
              }}
            >
              <p
                style={{
                  fontSize: '18px',
                  position: 'relative',
                  bottom: '-4',
                }}
              >
                View:
              </p>
              <FlatButton label="Week" primary/>
              <FlatButton label="Month" secondary/>
              <FlatButton label="Year"/>
            </div>
          </div>

          <div
            className="timeline"
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: '5%',
            }}
          >
            <hr
              style={{
                height: '3px',
                backgroundColor: '#868686',
              }}
            />
          </div>
        </Paper>
      )
    }
    return null
  }

  buildDots() {
    if (!this.props.userData.order) {
      console.log('No order')
      return null
    }
    for (const order in this.props.userData.order) {
      console.log('Each order: ', order)
    }
    const dot = (
      <Paper
        zDepth={3}
        circle
        style={{
          backgroundColor: '#83cddd',
          width: '20px',
          height: '20px',
          position: 'relative',
          bottom: '-18px',
          left: '30px',
        }}
      />
    )
    return dot
  }

  render() {
    const dot = this.buildDots()
    const main = this.buildPaper()
    return (
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {main}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  orderCheck: state.orderCheck,
  emailCheck: state.emailCheck,
  csCheck: state.csCheck,
})

export const TimelineContainer = connect(
  mapStateToProps,
  null,
)(Timeline)
