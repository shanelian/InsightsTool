import initialState from '../initialState'

function setUserData(state, userData) {
  console.log('UserData: ', userData)
  return Object.assign({}, state, { userData })
}

const userReducer = (state = initialState(), action) => {
  switch (action.type) {
    case 'UPDATE_USER_DATA':
      return setUserData(state, action.data)
    default:
      return state
  }
}

export default userReducer
