import { Paper } from 'material-ui'
import React from 'react'

export default class Detail extends React.Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  }

  render() {
    return (
      <div>
        <Paper
          zDepth={2}
          style={{
            marginTop: '30px',
            marginBottom: '30px',
            minHeight: '800px',
          }}
        >
          {`This is the detail for ${this.props.timelineType}`}
        </Paper>
      </div>
    )
  }
}
