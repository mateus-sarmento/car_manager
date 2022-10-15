import React from "react";
import {Link} from "react-router-dom";
import carIcon from "../carIcon.svg"
import histIcon from "../histIcon.svg"
import addIcont from "../addIcon.svg"
import editIcon from "../editIcon.svg"
import deleteIcon from "../deleteIcon.svg"
import '../App.css';
import './vehicle.css';

const Cars = [
  {
    marca: 'Fiat',
    modelo: 'Pulse',
    odo: '123',
    ano: '2021'
  },
  {
    marca: 'Jeep',
    modelo: 'Compass',
    odo: '1234',
    ano: '2022'
  },
  {
    marca: 'RAM',
    modelo: '3500',
    odo: '1223',
    ano: '2019'
  },
];
class vehicle extends React.Component {

  // Constructor 
  constructor(props) {
    super(props);

    this.state = {
        items: [],
        DataisLoaded: false
    };
    this.handleDeleteClick = this.handleDeleteClick.bind(this);
  }

  componentDidMount() {
    fetch(
      "https://car-mng.herokuapp.com/vehicle")
        .then((res) => res.json())
        .then((json) => {
            this.setState({
                items: json,
                DataisLoaded: true
            });
        })
  }

  async handleDeleteClick(event){
    const deleteId = event.target.dataset.key;
    console.log('https://car-mng.herokuapp.com/delOneVehicle/'+deleteId);
    console.log('Click!!!!');
    await fetch('https://car-mng.herokuapp.com/delOneVehicle/'+deleteId, { method: 'DELETE' })
    this.componentDidMount();
  }

  render(){
    const { DataisLoaded, items } = this.state;
    if (!DataisLoaded) return <div>
            <h1> Carregando... </h1> </div> ;
  return (
    <div className="App">
      <div className="App-body">
        <header className="App-header">  
          <div className="Header-text"><p>Veículos</p></div>
        </header>
        <ul className="listOfCars">
          {items.map((data) => (
            <tr key={data._id} data-key={data._id} > 
              <td className="carNames">{data.marca} {data.modelo}</td>
              <td className="imagesBox">
                <Link to="/" >
                <img data-key={data._id} src={editIcon} alt="editIcon" ></img>
                </Link>
                <img src={deleteIcon} alt="deleteIcon" onClick={this.handleDeleteClick} role={"button"} data-key={data._id} ></img>
              </td>
            </tr>
          ))}
        </ul>
        <footer className="App-footer">
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
export default vehicle;