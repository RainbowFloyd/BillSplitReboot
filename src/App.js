import React, {Component} from 'react';
import './App.css';
import { Route, Link } from 'react-router-dom';
//Components
import Login from'./components/Login/Login';
import Home from './components/Home/Home';
import Signup from './components/Signup/Signup';

class App extends Component {

  state = {
    loginedIn: false
  }

  //handlers
  handleLogin = () => {
    this.setState({
      loginedIn: true
    })
  }

  render () {
    //Need to refactor to use routes instead of conditional rendering
    <div>
    {/*Routes*/}
    <Route path='/signup' component={Signup} />
    </div>

    if (!this.state.loginedIn) {
      return <Login 
        handleLogin={this.handleLogin}
      />
    } else {
      return <Home />
    }
  }
}

export default App;
