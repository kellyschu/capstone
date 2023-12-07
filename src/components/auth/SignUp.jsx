import {createUserWithEmailAndPassword} from "firebase/auth";   
import React, {useState} from "react";
import {auth} from "../../firebase";


const SignUp = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const signUp = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            // const user = userCredential.user;
            console.log(userCredential);
            // ...
        }).catch((error) => {
            console.log(error)
        })
    }

    return (
        <div className="sign-in-container">
            <form onSubmit={signUp}>
                <h1>Create an account</h1>
                    <label>Email</label>
                    <input 
                        type="email" 
                        placeholder="Enter email" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)}
                    ></input>
                    <label>Password</label>
                    <input 
                        type="password" 
                        placeholder="Enter password"  
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    ></input>
                    <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
            </form>
        </div>
    );
};

export default SignUp;