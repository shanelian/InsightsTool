import React from 'react'
import {Bar, Line} from 'react-chartjs-2'
import {Dropdown, DropdownMenu, DropdownItem, Progress} from 'reactstrap'
import { connect } from 'react-redux'

export default class UserProfile extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      chart1Data: [],
      scoreColor: "danger",
    }
  }

  componentWillUpdate() {
    this.getScoreColor()
  }

  getChartData() {
    const data1 = [75, 78, 63, 53, 34, 30, 23]
    const data2 = [65, 59, 84, 84, 51, 62, 89]
    const data3 = [12, 34, 45, 65, 78, 89, 97]
    switch (this.props.userData.userId) {
      case 1:
        return data1
      case 2:
        return data2
      case 3:
        return data3
    }
  }

  buildChartData() {
    const brandPrimary = '#20a8d8';
    const brandSuccess = '#4dbd74';
    const brandInfo = '#63c2de';
    const brandDanger = '#f86c6b';

    // Card Chart 1
    const cardChartData1 = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'User Rentention Score',
          backgroundColor: brandPrimary,
          borderColor: 'rgba(255,255,255,.55)',
          data: this.getChartData(),
        }
      ],
    };

    const cardChartOpts1 = {
      maintainAspectRatio: false,
      legend: {
        display: false,
      },
      scales: {
        xAxes: [{
          gridLines: {
            color: 'transparent',
            zeroLineColor: 'transparent'
          },
          ticks: {
            fontSize: 2,
            fontColor: 'transparent',
          }

        }],
        yAxes: [{
          display: false,
          ticks: {
            display: false,
            min: Math.min.apply(Math, cardChartData1.datasets[0].data) - 5,
            max: Math.max.apply(Math, cardChartData1.datasets[0].data) + 5,
          }
        }],
      },
      elements: {
        line: {
          borderWidth: 1,
        },
        point: {
          radius: 4,
          hitRadius: 10,
          hoverRadius: 4,
        },
      },
    }

    return (
      <div className="col card card-inverse card-primary">
        <div className="card-block pb-0">
          <div className="btn-group float-right">
            <Dropdown isOpen={this.state.card1} toggle={() => {
              this.setState({card1: !this.state.card1});
            }}>
              <button onClick={() => {
                this.setState({card1: !this.state.card1});
              }} className="btn btn-transparent active dropdown-toggle p-0" data-toggle="dropdown"
                      aria-haspopup="true" aria-expanded={this.state.card1}>
                <i className="icon-settings"></i>
              </button>
              <DropdownMenu>
                <DropdownItem>Action</DropdownItem>
                <DropdownItem>Another action</DropdownItem>
                <DropdownItem>Something else here</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>
          <h4 className="mb-0">{this.props.userData.rententionScore}</h4>
          <p style={{ fontSize: '18px' }}>
            Retention Score
          </p>
        </div>
        <div className="chart-wrapper px-3">
          <Line data={cardChartData1} options={cardChartOpts1} height={70}/>
        </div>
      </div>
    )
  }

  getScoreColor() {
    if (this.props.userData) {
      if (this.props.userData.rententionScore < 30) {
        this.setState({
          scoreColor: "danger"
        })
      } else if (this.props.userData.rententionScore >= 30 && this.props.userData.rententionScore < 70) {
        this.setState({
          scoreColor: "info"
        })
      } else {
        this.setState({
          scoreColor: "success"
        })
      }

      if ((this.props.userData.LTV / 10000) < 0.3) {
        this.setState({
          LTVColor: "danger"
        })
      } else if ((this.props.userData.LTV / 10000) >= 0.3 && (this.props.userData.LTV / 10000) < 0.7) {
        this.setState({
          LTVColor: "info"
        })
      } else {
        this.setState({
          LTVColor: "success"
        })
      }
    }
  }

  render() {
    if (this.props.userData) {
      const chart = this.buildChartData()
      return (
        <div
          className="row"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#F8F8F8',
            minHeight: '200px',
          }}
        >
          <div
            className="col-4"
            style={{
              paddingLeft: '30px',
            }}
          >
            <h2>{this.props.userData.userName}</h2>
            <div style={{display: 'flex'}}>
              <div className="card">
                <div className="card-block">
                  <div className="h4 m-0">{this.props.userData.rententionScore}</div>
                  <div>
                    <p style={{ fontSize: '20px' }}>Retention Score</p>
                  </div>
                  <Progress className="progress-xs my-1" color={this.state.scoreColor} value={this.props.userData.rententionScore}/>
                </div>
              </div>
              <div className="card">
                <div className="card-block">
                  <div className="h4 m-0">$ {this.props.userData.LTV}</div>
                  <div>
                    <p style={{ fontSize: '20px' }}>LTV (Life time value)</p>
                  </div>
                  <Progress className="progress-xs my-1" color={this.state.LTVColor} value={(this.props.userData.LTV / 1000) * 10} />
                </div>
              </div>
            </div>
          </div>

          <div
            className="col-8"
            style={{
              display: 'flex',
              paddingRight: '30px',
            }}
          >
            {chart}
          </div>
        </div>
      )
    }
    return (
      <div
        className="row"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#F8F8F8',
          minHeight: '200px',
        }}
      >
        <h2>Please Enter a user Id to continue</h2>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  userData: state.userData,
})

export const UserProfileContainer = connect(
  mapStateToProps,
  null,
)(UserProfile)
