import React, { useEffect, useState } from "react";
import axios from 'axios';
import { useHistory } from "react-router";

const initialUser = {
  username: "",
  password: ""
}

const Login = () => {
  const [user, setUser] = useState(initialUser);
  const [error, setError] = useState('');
  const { username, password } = user;
  const history = useHistory();
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route

  const submit = (e) => {
    e.preventDefault()
    if (username === 'Lambda School' && password === 'i<3Lambd4') {
      setUser(initialUser);
      axios
        .post("http://localhost:5000/api/login", user)
        .then((res) => {
          localStorage.setItem('token', res.data.payload);
          console.log(res.data);
          history.push('/bubblepage')
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      setError("Username or Password not valid.")

    }
  }

  const handleChange = (e) => {
    e.preventDefault()
    setUser({
      ...user,
      [e.target.name]: e.target.value
    })
  };


  //replace with error state

  return (
    <div>
      <h1>Welcome to the Bubble App!</h1>
      <div data-testid="loginForm" className="login-form">
        <h2>Build login form here</h2>
        <form onSubmit={submit}>
          <div>
            <label>Username: </label>
            <input data-testid="username" onChange={handleChange} name="username" type="text" value={username} />
          </div>
          <div>
            <label>Password: </label>
            <input data-testid="password" onChange={handleChange} name="password" type="text" value={password} />
          </div>
          <input type="submit" />
        </form>
      </div>

      <p data-testid="errorMessage" className="error">{error}</p>
    </div>
  );
};

export default Login;

//Task List:
//1. Build a form containing a username and password field.
//2. Add whatever state nessiary for form functioning.
//3. MAKE SURE YOUR USERNAME AND PASSWORD INPUTS INCLUDE data-testid="username" and data-testid="password"
//4. If either the username or password is not entered, display the following words with the p tag provided: Username or Password not valid.
//5. If the username / password is equal to Lambda School / i<3Lambd4, save that token to localStorage.