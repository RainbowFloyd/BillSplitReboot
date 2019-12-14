import React from 'react';

const Login = (props) => {
	return (
		<div>
			<h1>Login Page</h1>
			<button onClick={props.handleLogin}>Login</button>
		</div>
	)

}

export default Login;