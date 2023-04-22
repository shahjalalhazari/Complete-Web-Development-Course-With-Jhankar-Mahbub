import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProviders';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
        .then(() => {})
        .catch (error => console.error(error))
    }
    return (
        <div className="navbar bg-primary rounded-xl text-white">
            <div className="flex-1">
                <Link to="/" className="btn btn-ghost normal-case text-xl">SHazari</Link>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/orders">Orders</Link>
                    </li>
                    <li>
                        <Link to="/profile">Profile</Link>
                    </li>
                    <li>
                        {user ? (
                            <>
                                <span>{user.email}</span>{" "}
                                <button onClick={handleLogOut} className="btn btn-warning">Sign Out</button>
                            </>
                        ) : (
                            <>
                            <>
                                <Link to="/login">Login</Link>
                            </>
                            <>
                                <Link to="/signup">Signup</Link>
                            </>
                            </>
                        )}
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Header;