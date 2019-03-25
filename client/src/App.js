import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'

import Navigation from './components/layout/Navigation'
import PlayList from './components/app/PlayList'

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Navigation />
          <Route
            exact
            path="/"
            component={ PlayList } />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
