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
    const result = []
    if (this.props.detailData) {
      for (const data of this.props.detailData) {
        const item = (
          <div>
            <h4>{data.time}</h4>
            <h5>{data.name}</h5>
            <p>{data.type}</p>
            <p>{data.description}</p>
          </div>
        )
        result.push(item)
      }
      return (
        <div className="container">
          <div className="row">
            <div className="col">
              {result}
            </div>
          </div>
        </div>
      )
    }
    return result
  }

  render() {
    const detail = this.buildDetail()
    if (this.props.detailData) {
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
