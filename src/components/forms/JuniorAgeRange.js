import React from 'react';
import '../../styles/juniorAgeRange.css';
import { NavLink } from 'react-router-dom';

const JuniorAgeRange = () => {
    return (
        <div className="JuniorAgeRange-div">
            <span className="number">2/4</span>

        <div className="JuniorAgeRange-content">
            <h2>What is the age range needed for this division</h2>
            <h3>choose from the list of the classification below</h3>
        </div>

        <div className="JuniorAgeRange-options">
            <div>
            <input type="checkbox" id="myCheck"/>
            <label for="myCheck">13-U</label>
            <input type="checkbox" id="myCheck"/>
            <label for="myCheck">14-U</label>
            </div>
            <div>
            <input type="checkbox" id="myCheck"/>
            <label for="myCheck">15-U</label>
            <input type="checkbox" id="myCheck"/>
            <label for="myCheck">16U</label>
            </div>
            <div>
            <input type="checkbox" id="myCheck"/>
            <label for="myCheck">17-U</label>
            </div>
        </div>

        <div className="buttons">
        <NavLink to='/Form1' exact activeClassName="active"><button className="button1">Back</button></NavLink>
        <NavLink to='/Gender' exact activeClassName="active"><button className="button2">Next</button></NavLink>
        </div>
        </div>
    )
}

export default JuniorAgeRange;
