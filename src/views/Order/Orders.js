import React, {Component} from 'react';
import axios from 'axios'

class Order extends Component {
  constructor(props) {
    super(props);

    this.state = {
    }
  }

  componentDidMount() {
    axios.get('/get_image')
      .then((response, state) => {
        console.log('Response: ', response)
      })
  }

  render() {
    return (
      <div className="animated fadeIn">
        Hello World from Order
      </div>
    )
  }
}

export default Order;
