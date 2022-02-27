import React, {Component} from 'react'
import './App.css';
import {Link} from 'react-router-dom'


class LogOrReg extends Component{
    // onClick2(){
    //     console.log("onClick");
    // }
render(){
return(
<div className="login_register">
    <div className='choose'>
    <h2> בחר:</h2>
    </div>

<Link to="/Register">
<button type="button" className='btn_logorreg' >הירשם </button></Link>
<Link to="/Login">
<button type="button" className='btn_logorreg' >התחבר </button></Link>
<Link to="/view">
<button type="button" className='btn_logorreg' >חפש מוצר </button></Link>


</div>
);
}


}

export default LogOrReg;