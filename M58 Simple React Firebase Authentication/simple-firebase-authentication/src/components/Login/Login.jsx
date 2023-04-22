import React, { useState } from 'react';
import app from '../../firebase/firebase.init';
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';


const Login = () => {
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();

    const [user, setUser] = useState(null);


    const handleLoginWithGoogle = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                const loggedInUser = result.user
                console.log(loggedInUser);
                setUser(loggedInUser)

        })
        .catch((error) => {
            console.log(error);
    })
    };



    return (
        <div>
            <button  onClick={handleLoginWithGoogle}>Login with Google</button>
            {
                user && 
                <div>
                        <p>User: {user.displayName}</p>
                        <p>Email: {user.email}</p>
                        <p>User Image: <img src={user.photoURL} alt="" /></p>
                </div>
            }
        </div>
    );
};

export default Login;