import React, { useState } from 'react'
import './Login.css';
import LoginImage from '../../assets/img/LoginBackground.webp'
import { Link } from 'react-router-dom';

const Login = () => {
    const [emailText, setEmailText] = useState("busy/no answer")

    const handleEmailTextChange = (e) => {
        setEmailText(e.target.value);
    }
    return (
        <div className='loginsoon'>
            <div className='login-bg'>
                <div className='image-section'>
                    <img src={LoginImage} alt="LoginImage" />
                </div>
                <div className='form-login'>
                    <div className="form-maindiv">
                        <div className="form-div">
                            <h1 className="create-account">Login</h1>
                            <p className="member-text">Create a new member? <a href="#" className="login-text">Sign Up</a></p>
                            <form action="">
                                <div className="form email-background">
                                    <input type="text" name="text" required onChange={handleEmailTextChange} />
                                    <label htmlFor="text" className="label-name">
                                        <span className="content-name">
                                            Email
                                        </span>
                                    </label>
                                </div>
                                <div className="form email-background">
                                    <input type="password" name="text" required onChange={handleEmailTextChange} />
                                    <label htmlFor="text" className="label-name">
                                        <span className="content-name">
                                            Password
                                        </span>
                                    </label>
                                </div>
                                <div className="remember">
                                    <div className="remember-me form-group">
                                        <input type="checkbox" name="" id="remember" />
                                        <label htmlFor="remember">Remember me</label>
                                    </div>
                                    <div className="forget">
                                        <a href="#">Forgot password?</a>
                                    </div>
                                </div>
                                <div className="button">
                                    <Link to="/home">
                                        <button>Log In</button></Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login