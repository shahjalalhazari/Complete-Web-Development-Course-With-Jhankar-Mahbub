import React, { useContext, useState } from 'react';
import './Login.css';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';

const Login = () => {
  const [error, setError] = useState('');
  const { user, signIn } = useContext(AuthContext)
  const navigate = useNavigate();

  const handleLogIn = (event) => {
    event.preventDefault();

    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    setError("");

    // Login User with email & password
    signIn(email, password)
      .then(result => {
        const loggedUser = result.user;
        console.log(loggedUser);
        form.reset(); 
        navigate('/');
      })
      .catch(error => {
        console.log(error);
        setError(error.message);
      })
  }
    return (
      <div className="form-container">
        <h2 className="form-title">Login</h2>
        <form onSubmit={handleLogIn}>
          <div className="form-control">
            <label htmlFor="email">Email:</label>
            <input type="email" name="email" id="email" required />
          </div>
          <div className="form-control">
            <label htmlFor="password">Password:</label>
            <input type="password" name="password" id="password" required />
          </div>
          <input type="submit" value="Login" className="btn" />
        </form>
        {/* Display error message */}
        <p className="text-error">{error}</p>
        <p>
          New to Ema-john?
          <span>
            <Link to="/signup" className="link">
              Create New Account
            </Link>
          </span>
        </p>
        <div className="social-login">
          <div className="divider">
            <hr />
            <span>or</span> <hr />
          </div>
          {/*   <div className="google-btn">
            
          </div> */}
        </div>
      </div>
    );
};

export default Login;