import React, { Fragment } from 'react';
 
const Sliders = (props) => {

    return (
    	<Fragment>
    	<div className="form-group">
    	<input id="volume" type="range" value={props.volumeValue} min="0.0" max="1.0" step="0.1"
		onChange={props.volume} />
		</div>
		<div className="form-group">
			<label htmlFor="power">ON/OFF</label>
			<input id="power" type="range" value={props.powerValue} min="1" max="2" step="1" 
			onChange={props.power} />
		</div>
		<div className="form-group">
			<label htmlFor="bank">BANK</label>
			<input id="bank" type="range" value={props.bankValue} min="1" max="2" step="1" 
			onChange={props.bank} />
		</div>
		</Fragment>
    )
}

export default Sliders;
