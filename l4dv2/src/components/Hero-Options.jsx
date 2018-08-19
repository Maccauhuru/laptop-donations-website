import React from 'react';

const Hero=() => {
	return (
		<div className="container">
		<div className="row">
		<div className="col-md-4">
		        <label for="step1" className="ml-5 text-white">Step 1</label>
        <div className="input-group mb-3">
            <div className="input-group-prepend">
                <span className="input-group-text bg-dark text-white">I Want To</span>
            </div>
 		<select>
  <option value="donate">Donate A Laptop</option>
  <option value="saab">Receive A Laptop</option>
</select>
        </div>
		</div>
		<div className="col-md-4">
		        <label for="step2" className="ml-5 text-white">Step 2</label>
        <div className="input-group mb-3">
            <div className="input-group-prepend">
                <span className="input-group-text bg-dark text-white">I Live In</span>
            </div>
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
		<div className="col-md-4">
						<div>
						<label for="step1" className="ml-5 text-white">Step 3</label>
        <div className="input-group mb-3">
            <div className="input-group-prepend">
                <span className="btn bg-dark btn-md btn-outline-light text-white pl-5 pr-5">START</span>
            </div>
						</div>
						
		</div>

	
		</div>
		</div>
		</div>
	)
}

export default Hero;