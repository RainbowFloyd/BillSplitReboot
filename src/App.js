import React, {Component} from 'react';
import './App.css';
import { Route, Link } from 'react-router-dom';
//Components
import Login from'./components/Login/Login';
import Home from './components/Home/Home';

class App extends Component {

  state = {
    loginedIn: false
  }

  render () {
    if (!this.state.loginedIn) {
      return <Login />
    } else {
      return <Home />
    }
  }
}

export default App;
