import React from 'react';
import { Route, Link } from 'react-router-dom';
//components
import Signup from '../Signup/Signup';

const Login = (props) => {
	return (
		<div>
			{/*Routes*/}
			<Route path='/signup' component={Signup} />

			<h1>Login Page</h1>
			<button onClick={props.handleLogin}>Login</button>
			<button><Link to='/signup'>Signup</Link></button>
		</div>
	)

}

export default Login;