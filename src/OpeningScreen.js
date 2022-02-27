import React, {Component} from 'react'
import './App.css';
//import Arrow from './images/arrow.png'
import LogOrReg from './LogOrReg'

import {Link} from 'react-router-dom'

class OpeningScreen extends Component{
    constructor() {
		super();
        this.state ={
           show :false
        }
        //this.onClick2 = this.onClick2.bind(this)
	}
    // onClick2(){
    //     console.log("onClick");
    //     this.setState({
    //         show :true,
    //     });
    // }


render(){

    return(
        // <div> {this.state.show &&
        //     <LogOrReg/>
        // }



		<div className="welcome">
					<div id="mainWelcome">
						<h1>ברוכים הבאים</h1>
						



                        <Link to="/LogOrReg">
                        <button className="next" type="button" >

                            <span>התחל</span>
                             </button> </Link>
                          
					</div>

                    </div>






                    // </div>


    )
}




}

export default OpeningScreen;