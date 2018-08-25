import React from 'react';

const StepOne = ()=>{
return(<div>
		<div className="col-md-4 mb-4 label-text">
		<i className="fa fa-laptop fa-4x"></i>
		<label htmlFor="step1" className="text-white">
		<p className="pt-3 ml-3">Step 1</p></label>
		</div>
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
);
}

export default StepOne;