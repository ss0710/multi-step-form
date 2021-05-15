import React from 'react';
import '../../styles/signup.css';
import { NavLink } from 'react-router-dom';

const SignUp = () => {
    return (
        <div className="signup-div">
            <h1>Relax And Play</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
             laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in repre</p>
             <NavLink to='/Form1' exact activeClassName="active"><button>Register</button></NavLink>
        </div>
    )
}

export default SignUp;
