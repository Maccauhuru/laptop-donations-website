import React from 'react';
import StepOne from './showcase/StepOne';
import StepTwo from './showcase/StepTwo';
import StepThree from './showcase/StepThree';

const Hero=() => {
	return (
		<div className="container-fluid">
		<div className="row">
		<div className="col-md-4" align="center">
		<StepOne />
		</div>
		<div className="col-md-4" align="justify">
		<StepTwo />
		</div>
		<div className="col-md-4" align="justify">
		<StepThree />
		</div>
		</div>
		</div>
	)
}

export default Hero;