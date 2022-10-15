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

  handleClick(event) {
    // 👇️ refers to the image element
    console.log(event.target);

    console.log('Image clicked');
  }

  render(){
  return (
    <div className="App">
      <div className="App-body">
        <header className="App-header">  
          <div className="Header-text"><p>Veículos</p></div>
        </header>
        <ul className="listOfCars">
          {Cars.map((data) => (
            <tr key={data.marca}> 
              <td className="carNames">{data.marca} {data.modelo}</td>
              <td className="imagesBox">
                <Link to="/" >
                <img src={editIcon} alt="editIcon" ></img>
                </Link>
                <Link to="/addVehicle" >
                  <img src={deleteIcon} alt="deleteIcon" ></img>
                </Link>
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
          <Link to="/" >
            <img src={histIcon} alt="Hist Icon" ></img>
          </Link>
        </div>
        <div className="carIcon-container">
            <Link to="/" >
              <img src={carIcon} alt="Car Icon" ></img>
            </Link>
        </div>
      </div>
    </div>
  );
  }
}
export default vehicle;