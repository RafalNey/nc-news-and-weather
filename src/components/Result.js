import React from 'react';
import './Result.css';

const Result = (props) => {

    const { err, city, temp, wind, pressure, sunset, sunrise, date } = props.weather;
    const sunriseTime = new Date(sunrise * 1000).toLocaleTimeString();
    const sunsetTime = new Date(sunset * 1000).toLocaleTimeString();
    let content = null;

    if (!err && city) {
        content = (
        <div className="Items">
        <h3 className="Item1">Weather for <strong>{city}</strong></h3>
        <h4 className="Item">on date and hour: {date}</h4>
        <h4 className="Item">Actual temperature: {temp} &#176;C</h4>
        <h4 className="Item">Sunrise time: {sunriseTime}</h4>
        <h4 className="Item">Sunset time: {sunsetTime}</h4>
        <h4 className="Item">wind strength: {wind} m/sek.</h4>
        <h4 className="Item">pressure: {pressure} hPa</h4>
        </div>)
    }

    return (

        <div className="Result">
        { (err) ? `We don't have such city as ${city}` : content }
        </div>
  )
}

export default Result;