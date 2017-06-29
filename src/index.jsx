import React from 'react'
import ReactDOM from 'react-dom'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { HashRouter, Route, Switch } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import { createStore } from 'redux'
import Full from './containers/Full'
import myReducer from './reducers/myreducer'
import initalState from './initialState'
import injectTapEventPlugin from 'react-tap-event-plugin'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

// Containers
const history = createBrowserHistory();

let store = createStore(myReducer, initalState())

ReactDOM.render((
  <Provider store={store}>
    <MuiThemeProvider>
      <HashRouter history={history}>
        <Switch>
          <Route path="/" name="Home" component={Full} />
        </Switch>
      </HashRouter>
    </MuiThemeProvider>
  </Provider>
), document.getElementById('root'))
