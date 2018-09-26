import React, { Component, Fragment } from 'react';
import DrumMachineBody from '../components/DrumMachineBody/DrumMachineBody';
import DrumMachineTop from '../components/DrumMachineTop/DrumMachineTop';
import DrumMachinePads from '../components/DrumMachinePads/DrumMachinePads';
import DrumMachinePad from '../components/DrumMachinePads/DrumMachinePad/DrumMachinePad';
import Sliders from './Sliders/Sliders';

class App extends Component {

  state = {
        volume: 0.3,
        power: 1,
        bank: 1,
        currentPad: ''
  }

  handleVolumeChange = (event) => this.setState({ volume: event.target.value })
  handlePowerChange = (event) => this.setState({ power: event.target.value })
  handleBankChange = (event) => this.setState({ bank: event.target.value })

  handleClicked = (event) => {
    const current = event.target.getAttribute('id');
    const audio = document.querySelector(`div.drum-pad audio[data-key='${event.target.getAttribute('data-key')}']`);
    const pad = document.querySelector(`#${current}`);

    if(this.state.power % 2 !== 0) {
      pad.classList.add('active') 
    }
    audio.currentTime = 0;
    audio.volume = this.state.volume;
    audio.play();
    this.setState({ currentPad: current });
  }

  handlePlaySound = (e) => {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const pad = document.querySelector(`div[data-key="${e.keyCode}"]`)
    if (!audio) return;

    const current = pad.getAttribute('id');
    if(this.state.power % 2 !== 0) {
      pad.classList.add('active') 
    }
    audio.currentTime = 0;
    audio.volume = this.state.volume;
    audio.play();
    this.setState({ currentPad: current });
  }

  handleRemoveTransition = (e) => {
    if(e.propertyName !== 'transform') return;

    e.target.classList.remove('active');
  }

  render() {
    return (
      <Fragment>
        <DrumMachineBody>
          <DrumMachineTop 
          bank={this.state.bank} 
          current={this.state.currentPad} 
          power={this.state.power}>
            <Sliders 
            volume={this.handleVolumeChange} 
            power={this.handlePowerChange} 
            bank={this.handleBankChange}
            volumeValue={this.state.volume}
            powerValue={this.state.power}
            bankValue={this.state.bank} />
          </DrumMachineTop>
          <DrumMachinePads>
            <DrumMachinePad 
            keys={this.state.keys} 
            bank={this.state.bank}
            clicked={this.handleClicked}
            keyPress={this.handlePlaySound}
            current={this.state.currentPad}
            rmTransition={this.handleRemoveTransition} 
            power={this.state.power}/>
          </DrumMachinePads>
        </DrumMachineBody>
      </Fragment>
    );
  }
}

export default App;
