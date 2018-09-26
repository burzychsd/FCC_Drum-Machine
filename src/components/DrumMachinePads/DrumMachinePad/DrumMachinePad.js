import React, { Component } from 'react';

import GrimeClap1 from './Sounds/BankOne/GrimeClap1.wav';
import BigClap5 from './Sounds/BankOne/BigClap5.wav';
import ClosedHihat1 from './Sounds/BankOne/ClosedHihat1.wav';
import GrimeKick3 from './Sounds/BankOne/GrimeKick3.wav';
import LowPerc27 from './Sounds/BankOne/LowPerc27.wav';
import PopHihat1 from './Sounds/BankOne/PopHihat1.wav';
import PopKick2 from './Sounds/BankOne/PopKick2.wav';
import Snare1 from './Sounds/BankOne/Snare1.wav';
import Snare5 from './Sounds/BankOne/Snare5.wav';

import GrimeClap14 from './Sounds/BankTwo/GrimeClap14.wav';
import GrimeKick2 from './Sounds/BankTwo/GrimeKick2.wav';
import GrimePerc18 from './Sounds/BankTwo/GrimePerc18.wav';
import LowPerc50 from './Sounds/BankTwo/LowPerc50.wav';
import OpenHihat11 from './Sounds/BankTwo/OpenHihat11.wav';
import PercussionShot1 from './Sounds/BankTwo/PercussionShot1.wav';
import Snare7 from './Sounds/BankTwo/Snare7.wav';
import VocalChant25 from './Sounds/BankTwo/VocalChant25.wav';
import VocalChant63 from './Sounds/BankTwo/VocalChant63.wav';

class DrumMachinePad extends Component {

	state = {
		keys: ['Q', 'W', 'E', 'A', 'S', 'D', 'Z', 'X', 'C'],
		dataKeys: [81, 87, 69, 65, 83, 68, 90, 88, 67]
	}

	componentDidMount() {
		this.allPads.focus();
	}

	componentDidUpdate() {
		this.allPads.focus();
	}

	render() {

		const arrOfKeys = this.state.keys;
		const dataKeyArr = this.state.dataKeys;

		let sounds = this.props.bank % 2 !== 0 ? [GrimeClap1, BigClap5, ClosedHihat1, GrimeKick3, LowPerc27, PopHihat1, PopKick2, Snare1, Snare5] : 
		[GrimeClap14, GrimeKick2, GrimePerc18, LowPerc50, OpenHihat11, PercussionShot1, Snare7, VocalChant25, VocalChant63];

		let names = this.props.bank % 2 !== 0 ? ["GrimeClap1", "BigClap5", "ClosedHihat1", "GrimeKick3", "LowPerc27", "PopHihat1", "PopKick2", "Snare1", "Snare5"] : 
		["GrimeClap14", "GrimeKick2", "GrimePerc18", "LowPerc50", "OpenHihat11", "PercussionShot1", "Snare7", "VocalChant25", "VocalChant63"];

		let soundsForPads = sounds.map((sound, i) => <audio className="clip" 
			data-key={dataKeyArr[i]} 
			id={arrOfKeys[i]} 
			key={sound} 
			src={this.props.power % 2 !== 0 ? sound : "#"}></audio>);

		const drumPads = arrOfKeys.map((key, i) => <div className="drum-pad flex justify-center items-center" 
			ref={(pad) => { this.allPads = pad; }} 
			data-key={dataKeyArr[i]} 
			key={key} 
			id={names[i]} 
			onKeyDown={this.props.keyPress} 
			tabIndex="0" 
			onClick={this.props.clicked}
			onTransitionEnd={this.props.rmTransition} 
			autoFocus>{soundsForPads[i]}{key}</div>)
	
		return (
        	drumPads
    	);
	}
};

export default DrumMachinePad;
