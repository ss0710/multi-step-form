import React from 'react';
import '../../styles/home.css';
import SignUp from './SignUp';
import Form1 from '../forms/Form1';
import {Route , Switch} from 'react-router-dom';

const Home = () => {
    return (
        <div className="Home">
            <div className="Home2">
            <div className="container">
            <Switch>
                <Route exact path="/" component={() => <SignUp />}/>
                <Route exact path="/Form1" component={() => <Form1 /> } />
              </Switch> 
            </div>
            </div>
        </div>
    )
}

export default Home
