import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'
import store from './redux/store'

import Navigation from './components/layout/Navigation'
import PlayList from './components/app/PlayList'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Provider store={store}>
          <BrowserRouter>
            <Navigation />
            <Route
              exact
              path="/"
              component={ PlayList } />
          </BrowserRouter>
        </Provider>
      </div>
    );
  }
}

export default App;
