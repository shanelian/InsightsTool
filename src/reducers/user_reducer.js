import util from 'util'
import initialState from '../initialState'

function setReduxOn(state) {
  return Object.assign({}, state, { isReduxOn: true })
}

const myreducer = (state = initialState(), action) => {
  switch (action.type) {
    case 'SET_REDUX_ON':
      return setReduxOn(state)
    default:
      return state
  }
}

export default myreducer
