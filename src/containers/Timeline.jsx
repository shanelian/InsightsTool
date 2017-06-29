import { Paper } from 'material-ui'
import React from 'react'

export default class Timeline extends React.Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  }

  render() {
    return (
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Paper
          zDepth={4}
          style={{
            marginTop: '10px',
            minHeight: '400px',
            width: '95%',
          }}
        >
          {`This is the timeline for ${this.props.timelineType}`}
        </Paper>
      </div>
    )
  }
}
