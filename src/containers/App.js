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

  handlePlaySound = (e, status) => {
    const current = e.target.getAttribute('id');
    const audio = status ? document.querySelector(`audio[data-key="${e.keyCode}"]`) : 
    document.querySelector(`div.drum-pad audio[data-key='${e.target.getAttribute('data-key')}']`);
    const pad = status ? document.querySelector(`div[data-key="${e.keyCode}"]`) : 
    document.querySelector(`#${current}`);
    if (!audio) return;

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
            clicked={(e) => this.handlePlaySound(e, null)}
            keyPress={(e) => this.handlePlaySound(e, 'keyPress')}
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
