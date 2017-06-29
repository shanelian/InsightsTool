import axios from 'axios'

export function fetchUserData(userId) {
  return (dispatch, getState) => {
    axios.get('/get_user_data_with_id', {
      params: {
        userId: this.state.userId,
      },
    })
      .then((response) => {
        dispatch({
          type: 'UPDATE_USER_DATA',
          data: response.data,
        })
      })
  }
}
