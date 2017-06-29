import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { HashRouter, Route, Switch } from 'react-router-dom'
import thunk from 'redux-thunk'
import { createBrowserHistory } from 'history'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import injectTapEventPlugin from 'react-tap-event-plugin'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { AppContainer } from './containers/Full'
import userReducer from './reducers/user_reducer'
import initalState from './initialState'

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

// Containers
const history = createBrowserHistory();

const store = createStore(
  userReducer,
  initalState(),
  applyMiddleware(thunk),
)

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider>
      <HashRouter history={history}>
        <Switch>
          <Route path="/" name="Home" component={AppContainer} />
        </Switch>
      </HashRouter>
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('root'),
)
