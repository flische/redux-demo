import 'materialize-css/dist/css/materialize.min.css';
import React, { Component } from 'react';
import Nav from './nav';
import Home from './home';


class App extends Component {
  render() {
    return (
      <div className="App">
          <Nav/>
          <Home/>
      </div>
    );
  }
}

export default App;
