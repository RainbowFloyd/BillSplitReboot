import React, {Component} from 'react';
import './App.css';
import { Route, Link } from 'react-router-dom';
//Components
import Login from'./components/Login/Login';

class App extends Component {

  state = {
    loginedIn: false
  }

  render () {
    return (
      <div>
        <p>Home</p>
        <Login />
      </div>
    )
  }
}

export default App;
