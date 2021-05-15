import React from 'react'
import { NavLink } from 'react-router-dom';
import '../../styles/gender.css';

const Gender = () => {
    return (
        <div className="gender-div">
        <span className="number">2/4</span>

        <div className="gender-inner-div">
        <div className="gender-content">
            <h2>What gender Group(s) are needed for this Division?</h2>
            <h3>make selections based on the options below</h3>
        </div>
        </div>

        <div className="gender-options"> 
        <input type="checkbox" id="myCheck"/>
        <label for="myCheck">Men</label><br/>
        <input type="checkbox" id="myCheck"/>
        <label for="myCheck">Women</label><br/>
        <input type="checkbox" id="myCheck"/>
        <label for="myCheck">Co-ed</label>
        </div>

        <div className="buttons">
        <NavLink to='/Form1' exact activeClassName="active"><button className="button1">Back</button></NavLink>
        <NavLink to='/Gender' exact activeClassName="active"><button className="button2">Next</button></NavLink>
        </div>
        </div>
    )
}

export default Gender
