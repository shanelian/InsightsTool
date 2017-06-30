import initialState from '../initialState'

function setUserData(state, userData) {
  console.log('UserData: ', userData)
  return Object.assign({}, state, { userData })
}

function showDetail(state, item) {
  console.log('Item data: ', item)
  return Object.assign({}, state, { item })
}

const userReducer = (state = initialState(), action) => {
  switch (action.type) {
    case 'UPDATE_USER_DATA':
      return setUserData(state, action.data)
    case 'SHOW_DETAIL':
      return showDetail(state, action.data)
    default:
      return state
  }
}

export default userReducer
