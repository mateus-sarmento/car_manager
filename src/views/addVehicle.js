import React from "react";
import {Link, renderMatches} from "react-router-dom";
import carIcon from "../carIcon.svg"
import histIcon from "../histIcon.svg"
import addIcont from "../addIcon.svg"
import '../App.css';
import './addVehicle.css';

class addVehicle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      marcaIn: '',
      modeloIn: '',
      odoIn: '',
      anoIn: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });

  }
  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.marcaIn + ' ' + this.state.modeloIn);
    event.preventDefault();
  }
  render() {
  return (
    <div className="App">
      <div className="App-body">
        <header className="App-header">  
          <div className="Header-text"><p>Veículos</p></div>
        </header>
        <form onSubmit={this.handleSubmit}>
            <label className="Ano-text">
                Ano:
            </label>
            <div className="Ano-inputbox">
              <input name="anoIn" type="text" value={this.state.anoIn} onChange={this.handleChange} placeholder='2020'/>
            </div>
            <label className="Odo-text">
                Odometro:
            </label>
            <div className="Odo-inputbox">
              <input name="odoIn" type="text" value={this.state.odoIn} onChange={this.handleChange} placeholder='1234'/>
            </div>
            <input type="submit" value="Submit" />
            <label className="Modelo-text">
                Modelo:
            </label>
            <div className="Modelo-inputbox">
              <input name="modeloIn" type="text" value={this.state.modeloIn} onChange={this.handleChange} placeholder='Pulse'/>
            </div>
            <label className="Marca-text">
                Marca:
            </label>
            <div className="Marca-inputbox">
              <input name="marcaIn" type="text" value={this.state.marcaIn} onChange={this.handleChange} placeholder='Fiat'/>
            </div>        
        </form>
        <footer className="App-footer">
            <p>footer</p>
        </footer>
        <div className='addIcon-container'>
          <Link to="/addVehicle" >
            <img src={addIcont} alt="Add Icon" ></img>
          </Link>
        </div>
        <div className='histIcon-container'>
          <Link to="/car_manager" >
            <img src={histIcon} alt="Hist Icon" ></img>
          </Link>
        </div>
        <div className="carIcon-container">
            <Link to="/car_manager" >
              <img src={carIcon} alt="Car Icon" ></img>
            </Link>
        </div>
      </div>
    </div>
  );
  }
}
export default addVehicle;