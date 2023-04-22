import React, { useContext } from "react";
import { Link, Navigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProviders";

const Login = () => {
    const { login } = useContext(AuthContext);

    const handleLogin = (event) => {
        event.preventDefault(); //For not to reload the page after submit the form.

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(`Email: ${email}, Password: ${password}`);

    login(email, password)
        .then((result) => {
            const loggedUser = result.user;
            console.log(loggedUser);
            form.reset(); //Clear the form
        })
        .catch((error) => {
            console.log(error);
        });
    };
    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col">
            <div className="text-center">
            <h1 className="text-5xl font-bold">Login</h1>
            </div>
            <div className="card flex-shrink-0 max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleLogin} className="card-body">
                <div className="form-control">
                <label className="label">
                    <span className="label-text">Email</span>
                </label>
                <input
                    type="email"
                    name="email"
                    placeholder="email"
                    className="input input-bordered"
                    required
                />
                </div>
                <div className="form-control">
                <label className="label">
                    <span className="label-text">Password</span>
                </label>
                <input
                    type="password"
                    name="password"
                    placeholder="password"
                    className="input input-bordered"
                    required
                />
                <label className="label">
                    <Link
                    to="/"
                    className="label-text-alt text-primary link link-hover"
                    >
                    Forgot password?
                    </Link>
                </label>
                </div>
                <div className="form-control mt-2">
                <button className="btn btn-primary">Login</button>
                </div>
                <p>
                New to SHazari?{" "}
                <Link to="/signup" className="text-primary">
                    SignUp Now
                </Link>
                </p>
            </form>
            </div>
        </div>
        </div>
    );
};

export default Login;
