import React from 'react';
import '../../styles/home.css';
import SignUp from './SignUp';
import Form1 from '../forms/Form1';
import {Route , Switch} from 'react-router-dom';
import Gender from '../forms/Gender';

const Home = () => {
    return (
        <div className="Home">
            <div className="Home2">
            <div className="container">
            <Switch>
                <Route exact path="/" component={() => <SignUp />}/>
                <Route exact path="/Form1" component={() => <Form1 /> }/>
                <Route exact path="/Gender" component={() => <Gender /> }/>
              </Switch> 
            </div>
            </div>
        </div>
    )
}

export default Home
