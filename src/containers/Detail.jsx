import { Paper } from 'material-ui'
import React from 'react'
import { Dropdown, DropdownMenu, DropdownItem, Progress } from 'reactstrap'

export default class Detail extends React.Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  }

  render() {
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
            {`This is the detail for ${this.props.timelineType}`}
            <table className="table table-hover table-outline mb-0 hidden-sm-down">
              <thead className="thead-default">
              <tr>
                <th>Order Type</th>
                <th>Usage</th>
                <th className="text-center">Payment Method</th>
                <th>Time</th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td>
                  <div>Yiorgos Avraamu</div>
                  <div className="small text-muted">
                    <span>New</span> | Registered: Jan 1, 2015
                  </div>
                </td>
                <td>
                  <div className="clearfix">
                    <div className="float-left">
                      <strong>50%</strong>
                    </div>
                    <div className="float-right">
                      <small className="text-muted">Jun 11, 2015 - Jul 10, 2015</small>
                    </div>
                  </div>
                  <Progress className="progress-xs" color="success" value="50" />
                </td>
                <td className="text-center">
                  <i className="fa fa-cc-mastercard" style={{fontSize: 24 + 'px'}}></i>
                </td>
                <td>
                  <div className="small text-muted">Last login</div>
                  <strong>10 sec ago</strong>
                </td>
              </tr>
              <tr>
                <td>
                  <div>Avram Tarasios</div>
                  <div className="small text-muted">

                    <span>Recurring</span> | Registered: Jan 1, 2015
                  </div>
                </td>
                <td>
                  <div className="clearfix">
                    <div className="float-left">
                      <strong>10%</strong>
                    </div>
                    <div className="float-right">
                      <small className="text-muted">Jun 11, 2015 - Jul 10, 2015</small>
                    </div>
                  </div>
                  <Progress className="progress-xs" color="info" value="10" />
                </td>
                <td className="text-center">
                  <i className="fa fa-cc-visa" style={{fontSize: 24 + 'px'}}></i>
                </td>
                <td>
                  <div className="small text-muted">Last login</div>
                  <strong>5 minutes ago</strong>
                </td>
              </tr>
              <tr>
                <td>
                  <div>Quintin Ed</div>
                  <div className="small text-muted">
                    <span>New</span> | Registered: Jan 1, 2015
                  </div>
                </td>
                <td>
                  <div className="clearfix">
                    <div className="float-left">
                      <strong>74%</strong>
                    </div>
                    <div className="float-right">
                      <small className="text-muted">Jun 11, 2015 - Jul 10, 2015</small>
                    </div>
                  </div>
                  <Progress className="progress-xs" color="warning" value="74" />
                </td>
                <td className="text-center">
                  <i className="fa fa-cc-stripe" style={{fontSize: 24 + 'px'}}></i>
                </td>
                <td>
                  <div className="small text-muted">Last login</div>
                  <strong>1 hour ago</strong>
                </td>
              </tr>
              <tr>
                <td>
                  <div>Enéas Kwadwo</div>
                  <div className="small text-muted">
                    <span>New</span> | Registered: Jan 1, 2015
                  </div>
                </td>
                <td>
                  <div className="clearfix">
                    <div className="float-left">
                      <strong>98%</strong>
                    </div>
                    <div className="float-right">
                      <small className="text-muted">Jun 11, 2015 - Jul 10, 2015</small>
                    </div>
                  </div>
                  <Progress className="progress-xs" color="danger" value="98" />
                </td>
                <td className="text-center">
                  <i className="fa fa-paypal" style={{fontSize: 24 + 'px'}}></i>
                </td>
                <td>
                  <div className="small text-muted">Last login</div>
                  <strong>Last month</strong>
                </td>
              </tr>
              <tr>
                <td>
                  <div>Agapetus Tadeáš</div>
                </td>
                <td>
                  <div className="clearfix">
                    <div className="float-left">
                      <strong>22%</strong>
                    </div>
                    <div className="float-right">
                      <small className="text-muted">Jun 11, 2015 - Jul 10, 2015</small>
                    </div>
                  </div>
                  <Progress className="progress-xs" color="info" value="22" />
                </td>
                <td className="text-center">
                  <i className="fa fa-google-wallet" style={{fontSize: 24 + 'px'}}></i>
                </td>
                <td>
                  <div className="small text-muted">Last login</div>
                  <strong>Last week</strong>
                </td>
              </tr>
              <tr>
                <td>
                  <div>Friderik Dávid</div>
                  <div className="small text-muted">
                    <span>New</span> | Registered: Jan 1, 2015
                  </div>
                </td>
                <td>
                  <div className="clearfix">
                    <div className="float-left">
                      <strong>43%</strong>
                    </div>
                    <div className="float-right">
                      <small className="text-muted">Jun 11, 2015 - Jul 10, 2015</small>
                    </div>
                  </div>
                  <Progress className="progress-xs" color="success" value="43" />
                </td>
                <td className="text-center">
                  <i className="fa fa-cc-amex" style={{fontSize: 24 + 'px'}}></i>
                </td>
                <td>
                  <div className="small text-muted">Last login</div>
                  <strong>Yesterday</strong>
                </td>
              </tr>
              </tbody>
            </table>
          </Paper>
        </div>
      )
    }
    return null
  }
}
