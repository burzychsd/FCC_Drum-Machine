import React from 'react';

const DrumMachinePad = (props) => {
    return (
        <div className="w-90 flex flex-wrap justify-between items-center mt3-l mt3-m mt1" key="pads" style={{ height: '230px' }}>
        	{props.children}
        </div>
    );
};

export default DrumMachinePad;
