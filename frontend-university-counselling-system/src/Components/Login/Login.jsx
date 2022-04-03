import { useState } from "react";
import "./Login.css";
const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    let emailTextHandler = (event) => {
        setEmail(event.target.value);
    }
    let passwordTextHandler = (event) => {
        setPassword(event.target.value);
    }


    let onLoginSubmit = (event) => {
        event.preventDefault();
        console.log(email + " " + password);
    }

    return (
        <div className="container-fluid w-50 mt-5">
            <div className="m-3">
                <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
                <p className="text-50 text-success mb-3">Please enter your login and password!</p>
                <div className="border border-1 rounded">
                    <div className="m-3">
                        <form onSubmit={onLoginSubmit}>
                            <div className="form-floating mb-3">
                                <input type="email" className="form-control" value={email} onChange={emailTextHandler} placeholder="name@example.com" />
                                <label>Email address</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input type="password" className="form-control" value={password} onChange={passwordTextHandler} placeholder="password" />
                                <label>Password</label>
                            </div>

                            <div className="row g-1">
                                <div className="text-center mb-2"><a href="#!" className="link-success">Forgot password?</a></div>
                                <button className="btn1 primary1">Login</button>


                                <hr className="my-4" />
                                <p>Don't have an account? <a href="#!" className="link-success">Register as Student</a><span className="text-secondary"> OR </span><a href="#!" className="link-success">College</a></p>
                            </div>
                        </form>
                    </div >
                </div >
            </div >
        </div >
    );
}

export default Login;