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
    }
  }

  buildMainHeader() {
    return (
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
          <p style={{
            fontSize: '24px',
            fontFamily: 'Brandon Text',
            fontWeight: 500,
            position: 'relative',
            bottom: '-4',
          }}
          >
            2016/1/1 - 2017/5/1
          </p>
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
              fontFamily: 'Brandon Text',
              fontWeight: 500,
            }}
          >
            View:
          </p>
          <FlatButton label="Week" primary />
          <FlatButton label="Month" secondary />
          <FlatButton label="Year" />
        </div>
      </div>
    )
  }

  buildPaper() {
    const header = this.buildMainHeader()
    const label = this.buildTimeLabel()
    if (this.props.timelineData) {
      const dot = this.buildDots()
      return (
        <Paper
          zDepth={3}
          style={{
            marginTop: '10px',
            minHeight: '400px',
            width: '95%',
          }}
        >
          {header}
          <div
            className="timeline"
            style={{
              justifyContent: 'center',
              marginTop: '5%',
            }}
          >
            {dot}
            <hr
              style={{
                height: '3px',
                backgroundColor: '#868686',
              }}
            />
          </div>
          {label}
        </Paper>
      )
    }
    return null
  }

  buildTimeLabel() {
    return (
      <div
        style={{
          display: 'flex',
          marginTop: '15%',
          justifyContent: 'space-between',
          fontFamily: 'Brandon Text',
          fontWeight: 500,
          paddingLeft: '10px',
          paddingRight: '10px',
        }}
      >
        <p>Jan 2016</p>
        <p>Mar 2016</p>
        <p>May 2016</p>
        <p>July 2016</p>
        <p>Sept 2016</p>
        <p>Nov 2016</p>
        <p>Jan 2017</p>
        <p>Mar 2017</p>
        <p>May 2017</p>
      </div>
    )
  }

  buildDots() {
    const result = []
    if (this.props.timelineData) {
      for (const item of this.props.timelineData) {
        console.log('Each item: ', item)
        const dot = (
            <IconButton
              tooltip={
                <div
                  style={{
                    fontSize: '16px',
                    fontFamily: 'Brandon Text',
                  }}
                >
                  <p>{item.description}</p>
                  <p>{item.time}</p>
                </div>
              }
              tooltipPosition="top-left"
              style={{
                position: 'relative',
                left: item.left,
                top: '32px',
                display: 'inline-block',
              }}
              iconStyle={{
                color: item.color,
              }}
            >
              <i
                className="material-icons"
              >
                add_circle
              </i>
            </IconButton>
        )
        result.push(dot)
      }
    }
    console.log('Data not exist')
    return result
  }

  render() {
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
  userData: state.userData,
})

export const TimelineContainer = connect(
  null,
  null,
)(Timeline)
