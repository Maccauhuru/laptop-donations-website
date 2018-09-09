import React from 'react';

const Hero=() => {
	return (
		<section id="home-icons" className="py-5">
        <div className="container">
            <div className="row">
                <div className="col-md-4 mb-4 text-center mx-auto">
                    <i className="fa fa-laptop fa-4x"></i>
                    <h3>Step One</h3>
					<p>Choose to be a donor or receiver</p>
					<div className = "input-group">
					<div className = "input-group-prepend">
					<div className = "input-group-text bg-dark text-white ml-5"> I Want To </div></div>
	 				<select>
					<option value="donate"> Donate A Laptop </option><option value = "saab" > Receive A Laptop </option></select> 
					</div>
                </div>
                <div className="col-md-4 mb-4 text-center mx-auto">
                    <i className="fa fa-location-arrow fa-4x"></i>
                    <h3>Step Two</h3>
					<p>Choose a location</p>
					<div className = "input-group">
					<div className = "input-group-prepend">
					<div className = "input-group-text bg-dark text-white ml-5"> I Live In </div></div>
<select>
	<option value="AL">Alabama</option>
	<option value="AK">Alaska</option>
	<option value="AZ">Arizona</option>
	<option value="AR">Arkansas</option>
	<option value="CA">California</option>
	<option value="CO">Colorado</option>
	<option value="CT">Connecticut</option>
	<option value="DE">Delaware</option>
	<option value="DC">District Of Columbia</option>
	<option value="FL">Florida</option>
	<option value="GA">Georgia</option>
	<option value="HI">Hawaii</option>
	<option value="ID">Idaho</option>
	<option value="IL">Illinois</option>
	<option value="IN">Indiana</option>
	<option value="IA">Iowa</option>
	<option value="KS">Kansas</option>
	<option value="KY">Kentucky</option>
	<option value="LA">Louisiana</option>
	<option value="ME">Maine</option>
	<option value="MD">Maryland</option>
	<option value="MA">Massachusetts</option>
	<option value="MI">Michigan</option>
	<option value="MN">Minnesota</option>
	<option value="MS">Mississippi</option>
	<option value="MO">Missouri</option>
	<option value="MT">Montana</option>
	<option value="NE">Nebraska</option>
	<option value="NV">Nevada</option>
	<option value="NH">New Hampshire</option>
	<option value="NJ">New Jersey</option>
	<option value="NM">New Mexico</option>
	<option value="NY">New York</option>
	<option value="NC">North Carolina</option>
	<option value="ND">North Dakota</option>
	<option value="OH">Ohio</option>
	<option value="OK">Oklahoma</option>
	<option value="OR">Oregon</option>
	<option value="PA">Pennsylvania</option>
	<option value="RI">Rhode Island</option>
	<option value="SC">South Carolina</option>
	<option value="SD">South Dakota</option>
	<option value="TN">Tennessee</option>
	<option value="TX">Texas</option>
	<option value="UT">Utah</option>
	<option value="VT">Vermont</option>
	<option value="VA">Virginia</option>
	<option value="WA">Washington</option>
	<option value="WV">West Virginia</option>
	<option value="WI">Wisconsin</option>
	<option value="WY">Wyoming</option>
</select>			
					</div>
                </div>
                <div className="col-md-4 mb-4 text-center">
                    <i className="fa fa-user-plus fa-4x"></i>
                    <h3>Step Three</h3>
					<p>Proceed to complete application</p>
					<div><input type="button" className="btn btn-dark text-white btn-block" value="Submit"/></div>
				</div>
				
            </div>
        </div>
    </section>	
	)
}

export default Hero;