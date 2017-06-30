import initialState from '../initialState'

function setUserData(state, userData) {
  console.log('UserData: ', userData)
  return Object.assign({}, state, { userData })
}

function toggleOrder(state) {
  console.log('Toggle Order is: ', state.orderCheck)
  return Object.assign({}, state, { orderCheck: !state.orderCheck })
}

function toggleEmail(state) {
  console.log('Toggle Email')
  return Object.assign({}, state, { emailCheck: !state.emailCheck })
}

function toggleCS(state) {
  console.log('Toggle CS')
  return Object.assign({}, state, { csCheck: !state.csCheck })
}

const userReducer = (state = initialState(), action) => {
  switch (action.type) {
    case 'UPDATE_USER_DATA':
      return setUserData(state, action.data)
    case 'TOGGLE_ORDER':
      return toggleOrder(state)
    case 'TOGGLE_EMAIL':
      return toggleEmail(state)
    case 'TOGGLE_CS':
      return toggleCS(state)
    default:
      return state
  }
}

export default userReducer
