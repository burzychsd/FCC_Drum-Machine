import React from 'react';

const DrumMachineBody = (props) => {
    return (
        <div id="drum-machine-bg" className="w-90 flex justify-center items-center pa3">
        	<div id="drum-machine" className="flex flex-column justify-center items-center">
        	{props.children}
        	</div>
        </div>
    );
};

export default DrumMachineBody;
