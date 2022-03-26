import React, { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Alert } from 'react-bootstrap';
import Footer from './footer';


function App() {
  const apiKey = '6c992b4d06aed5584a03f66913107c43';
  const [weatherData, setWeatherData] = useState([{}]);
  const [city, setCity] = useState("");

  const getWeather = (event) => {
    if(event.key == "Enter") {
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`).then(
        response => response.json()
      ) .then(
        data => {
          setWeatherData(data)
          setCity("")
        }
      )
    }
  }

  const getWeatherIcon = (iconParameter) => {
        const icon = `https://openweathermap.org/img/wn/${iconParameter}@2x.png`
        return <img src = {icon} alt = "" />
    }  

  return (
    <div className='App'>
      <div className='container'>
      {/* <img className='image' src="images/bulut.png" alt="" /> */}
        <div>
          <span>How is the weather today? </span>
        </div>

        <input 
        className='input' 
        placeholder='Enter the city' 
        onChange={e => setCity(e.target.value)}
        value={city}
        onKeyPress={getWeather}
        />
      
        <div className='date'>
          {new Date().toLocaleDateString()}
          <hr className='style'/>
        </div>

        <div>
          {typeof weatherData.main === "undefined" ? (
            <div> 
            </div>
          ) : (
            
            <div className='data'> 
              <p> 📍 {weatherData.name}, {weatherData.sys.country} </p>
              <p> {weatherData.weather[0].main} </p>
              <p className='icon-container'> {getWeatherIcon(weatherData.weather[0].icon)} </p>
              <p> 🌡️ {Math.round(weatherData.main.temp)} °C </p>
              <p> 🎏 {weatherData.main.humidity} % </p>
              <p> 🎐 {Math.round(weatherData.wind.speed)} km/h </p>
              <br />
              <br />
              <br />
            </div>
            
          )}

          {weatherData.cod === "404" ? (
            <div>
              <Alert> City is not found! </Alert>
            </div>
          ) : (null)}  

          {weatherData.cod === "401" ? (
            <div> 
              <Alert> Invalid API key. Please see http://openweathermap.org/faq#error401 for more info. </Alert>
            </div>
          ) : (null)}
          <Footer></Footer>
        </div>
      </div>
    </div>
  )
}

export default App