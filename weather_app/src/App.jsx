import React, { useState } from 'react'
import './App.css'


const api = {
  key: "d45f0d8eadf18ebdcb42ca3764e1e315",
  base: "https://api.openweathermap.org/data/2.5/",
}

const App = () => {

  const [search, setSearch] = useState("");
  const [weather, setWeather] = useState({});

  const searchPress = () => {
    fetch(`${api.base}weather?q=${search}&units=metric&APPID=${api.key}`)
    .then(res => res.json())
    .then((result) => {
      setWeather(result);
    });
  };

  return (
    <div className="container">
      <div className='Heading'>
        Weather App
      </div>
      <div className="Input">
        <input type="text" placeholder='Enter the City' onChange={(e) => setSearch(e.target.value)} />
        <button onClick={searchPress}>Search</button>
      </div>
      {typeof weather.main != "undefined" ? (
        <div>
          <div className="Location">
        <h1>{weather.name}</h1>
      </div>
      <div className="Temprature">
        <h2>{weather.main.temp}°C</h2>
      </div>
      <div className="Condition">
        <h3>{weather.weather[0].main}</h3>
        <p>({weather.weather[0].description})</p>
      </div>
        </div>
      ) : (
        ""
      )}
      
     
    </div>
  )
}

export default App
