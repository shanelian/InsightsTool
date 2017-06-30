import { Paper } from 'material-ui'
import React from 'react'
import { Dropdown, DropdownMenu, DropdownItem, Progress } from 'reactstrap'

export default class Detail extends React.Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  }

  buildDetail() {

  }

  render() {
    const detail = this.buildDetail()
    if (this.props.user) {
      return (
        <div>
          <Paper
            zDepth={2}
            style={{
              marginTop: '30px',
              marginBottom: '30px',
              minHeight: '500px',
              padding: '30px',
            }}
          >
            {detail}
          </Paper>
        </div>
      )
    }
    return null
  }
}
