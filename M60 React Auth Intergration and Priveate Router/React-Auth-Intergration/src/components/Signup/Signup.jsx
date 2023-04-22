import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProviders";

const Signup = () => {
    const { user, createUser } = useContext(AuthContext);
//   console.log(createUser);

    const handleSignUp = (event) => {
        event.preventDefault(); //For not to reload the page after submit the form.
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(`Name: ${name}, Email: ${email}, Password: ${password}`);

    createUser(email, password)
        .then((result) => {
            const loggedUser = result.user;
                console.log(loggedUser);
                form.reset(); //Clear the form after submitting.
        })
        .catch((error) => {
            console.log(error);
        });
    };
    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col">
            <div className="text-center">
            <h1 className="text-5xl font-bold">Welcome!!</h1>
            </div>
            <div className="card flex-shrink-0 max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSignUp} className="card-body">
                <div className="form-control">
                <label className="label">
                    <span className="label-text">Name</span>
                </label>
                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    className="input input-bordered"
                    required
                />
                </div>
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
                </div>
                <div className="form-control mt-2">
                <button className="btn btn-primary">Signup</button>
                </div>
                <p>
                Already have an account?{" "}
                <Link to="/login" className="text-primary">
                    Please Login
                </Link>
                </p>
            </form>
            </div>
        </div>
        </div>
    );
};

export default Signup;
