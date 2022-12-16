import React, { useState, useContext } from 'react';
import {Navigate } from "react-router-dom";
import UserContext, { LoginContext } from '../UserProvider';
import {registerUser, logUsuario} from '../apiCalls.js'
import loginImg from "../loginImg.svg"
import cadastrarIcon from "../cadastrarIcon.svg"
import entrarIcon from "../entrarIcon.svg"
import '../App.css';
import './vehicle.css';
import './login.css';




class Login extends React.Component {
    
    constructor(props) {
    super(props);
    
    this.state = {
        name: '',
        password: '',
        userAuthed: null
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
    const userLogin = {
        name: this.state.name,
        password: this.state.password
    };
    console.log("click")
    alert('A name was submitted: ' + this.state.name + ' ' + this.state.password);
    // event.preventDefault();
    // fetch('https://car-mng-api-b.onrender.com/vehicle/', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(userLogin)
    // });
  }

  logSubmit = async (event) => {
    // const navigate = useNavigate();
    event.preventDefault();
    const setUser = this.context
    const newUser = { name: 'Joe', loggedIn: true }
    // setUser(newUser)

    const user = this.context
    // alert(user.name)
    const userLogin = {
        name: this.state.name,
        password: this.state.password
    };
    const { apiData, jsonResponse } = await logUsuario(this.state.name, this.state.password);
    alert(jsonResponse.msg);

    if (apiData.status === 200) {
        this.setState({ ['userAuthed']: true });
        // this.context.setUser({ name: this.state.name, token: jsonResponse.token })
    }
    // alert(this.context.user.name)
  }

  regSubmit = async (event) => {
    event.preventDefault();
    const userLogin = {
        name: this.state.name,
        password: this.state.password
    };
    console.log("click")
    // alert('Register: ' + this.state.name + ' ' + this.state.password);
    const { apiData, jsonResponse } = await registerUser(this.state.name, this.state.password);


    alert(jsonResponse.msg);

  }

  render() {
    
    let { name, password, userAuthed } = this.state;
  return (
    <div className="App">
      {userAuthed && (
          <Navigate to="/car_manager" replace={true} />
        )}  
      <div className="App-body">
        <header className="App-header"> 
            <img src={loginImg} alt="login" ></img>
        </header>
        <div className="cad-Icon">
            <img src={cadastrarIcon} onClick={this.regSubmit} alt="cad icon" ></img>
        </div>  
        <div className="entrar-Icon">
            <img src={entrarIcon} onClick={this.logSubmit} alt="entrar icon" ></img>
        </div>      
        <div onSubmit={this.handleSubmit}>
            <label className="Senha-text">
                Senha:
            </label>
            <div className="Senha-inputbox">
              <input name="password" type="text" value={this.state.password} onChange={this.handleChange} placeholder='password'/>
            </div>
            <label className="User-text">
                Usuario:
            </label>
            <div className="User-inputbox">
              <input name="name" type="text" value={this.state.name} onChange={this.handleChange} placeholder='User Name'/>
            </div>
        </div>
        <footer className="App-footer">
            <p></p>
        </footer>
      </div>
    </div>
  );
  }
}

Login.contextType = UserContext

export default Login;