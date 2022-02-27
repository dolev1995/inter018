import React, {Component} from 'react'
import './App.css';

import {Link} from 'react-router-dom'


class ViewProduct extends Component{
    constructor() {
		super();
        this.state ={
            valueSearch: '',
            valueAdd: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
	}


    handleChange(event) {
        this.setState({value: event.target.value});
      }
      handleSubmit(event) {
          alert("מוצר אינו זמין במלאי" + this.state.value);
        event.preventDefault();
      }


    render() {

		return (
			<div className="view">
                <div className='view'>
                <h3>חיפוש מוצר</h3>
                </div>
				<form onSubmit={this.handleSubmit}>
                <input placeholder="הכנס שם פריט" type="text" value={this.setState.valueSearch}  className='view' onChange={this.handleChange} required/>
					<input type='submit' className="btn main-btn" value='חפש מוצר'/>

				</form>

                <label> מוצר שברצונך להוסיף:</label>
                <input placeholder="הכנס שם פריט" type="text"/>
                <button> הכנס</button>

</div>

        );
    }

}
export default ViewProduct;