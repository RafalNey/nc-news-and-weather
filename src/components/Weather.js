import React, { Component } from 'react'
import './Weather.css';
import Form from './Form';
import Result from './Result';

// My API key to weather webpage 
const APIkey = "9514463719c757881282f9111d142acb";

class Weather extends Component {
 
  state = {
    value: '',
    date: '',
    city: '',
    sunrise: '',
    sunset: '',
    temp: '',
    pressure: '',
    wind: '',
    err: false,
  }
  
  handleInputChange = (e) => {
    this.setState({
      value: e.target.value
    })
  }

  handleCitySubmit = (e) => {
    e.preventDefault()
    const API = `http://api.openweathermap.org/data/2.5/weather?q=${this.state.value}&appid=${APIkey}&units=metric`

    fetch(API)
    .then(response => {
      if (response.ok) {
        return response
      };
      throw Error('Sorry. It wont work :-(')
    })
    .then(response => 
      response.json())
    .then(response => {
      const time = new Date().toLocaleString();
      this.setState(state => ({ 
        err: false,
        date: time,
        sunrise: response.sys.sunrise,
        sunset: response.sys.sunset,
        temp: response.main.temp,
        pressure: response.main.pressure,
        wind: response.wind.speed,
        city: state.value,
      }));
      
  
      console.log(response);
    })
    .catch(err => {
      console.log(err);
      this.setState(state => ({
        err: true,
        city: this.state.value,
    }));
    })
  }

  render() {

    return (
      <div className="Weather">
        <Form 
        value={this.state.value} 
        change={this.handleInputChange}
        submit={this.handleCitySubmit}
        />
        <Result weather={this.state}/>
      </div>
    );
  }
}

export default Weather;