import React, { useContext, useState } from 'react';
import './SignUp.css'
import { Link } from 'react-router-dom';
import google from '../../assets/google.svg'
import { AuthContext } from '../providers/AuthProvider';

const SignUp = () => {
  const [error, setError] = useState('');
  const { user, createUser } = useContext(AuthContext)

  const handleSignUp = (event) => {
    event.preventDefault();

    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;
    console.log(email, password, confirmPassword);
    setError("");

    // Check password === confirmPassword
    if (password !== confirmPassword) {
      setError("Your password didn't match")
      return
    }
    // Password must be 6 characters long
    if (password < 6) {
      setError("Password must have 6 characters")
      return
    }
    // Create User with email & password
    createUser(email, password)
      .then(result => {
        const loggedUser = result.user;
        console.log(loggedUser);
        form.reset();
      })
      .catch(error => {
        console.log(error);
        setError(error.message);
      })

  }
  return (
    <div className="form-container">
      <h2 className="form-title">Sign Up</h2>
      <form onSubmit={handleSignUp}>
        <div className="form-control">
          <label htmlFor="email">Email:</label>
          <input type="email" name="email" id="email" required />
        </div>

        <div className="form-control">
          <label htmlFor="password">Password:</label>
          <input type="password" name="password" id="password" required />
        </div>

        <div className="form-control">
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            required
          />
        </div>
        <input type="submit" value="Sign Up " className="btn" />
      </form>
      {/* Display error message */}
      <p className="text-error">{error}</p>

      <p>
        Already have an account?
        <span>
          <Link to="/login" className="link">
            Login
          </Link>
        </span>
      </p>
      <div className="social-login">
        <div className="divider">
          <hr />
          <span>or</span> <hr />
        </div>
        {/* <div className="google-btn">
          {google}
        </div> */}
      </div>
    </div>
  );
};

export default SignUp;