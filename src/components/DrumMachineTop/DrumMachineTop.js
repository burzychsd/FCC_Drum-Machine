import React, { Fragment } from 'react';
import BatteryIcon from './battery-icon.svg';

const DrumMachineTop = (props) => {
    return (
    	<Fragment>
	        <div className="flex justify-center items-center ph4">
	        	<div id="display" className="flex flex-column">
	        		<div id="battery-icon" className={props.power % 2 === 0 ? "dn" : null } style={{ width: '1.5em', height: '1em' }}>
	        			<img src={BatteryIcon} alt="battery-icon"/>
	        		</div>
	        		<p className={props.power % 2 === 0 ? "dn" : null } id="sound-bank">{props.bank % 2 !== 0 ? "Bank One" : "Bank Two"}</p>
	        		<p className={props.power % 2 === 0 ? "dn" : null } id="current-pad">{props.current}</p>
	        	</div>
	        </div>
	        <div className="flex flex-wrap justify-center items-center mt3 ph2">
	        	{props.children}
	        </div>
        </Fragment>
    );
};

export default DrumMachineTop;
