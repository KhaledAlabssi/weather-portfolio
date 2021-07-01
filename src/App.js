import React, { useState } from 'react';
import './App.css';

const api = {
  key: process.env.REACT_APP_API_KEY,
  base: 'https://api.openweathermap.org/data/2.5/'
}
function App() {

  const [query, setQuery] = useState('')
  const [weather, setWeather] = useState({})

  function search(e) {
    if (e.key === 'Enter') {
      if(query === '') return
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then(res => {
          if (!res.ok) {
            
            throw new Error(res.statusText)
          }
          return res.json()
        })
        .then(result => {
          
          setWeather(result)
          setQuery('')
        })
        .catch(() => {
          setQuery('')
          alert('Invalid input...')})
    }
  }


  let date = new Date().toDateString();


  return (
    <div className={typeof (weather.main) != 'undefined' ? ((weather.main.temp > 16) ? 'App' : 'App snow') : 'App snow'}>
      <main>
        <div className="search-box">
          <input
            type='text'
            className='search-bar'
            placeholder='Search...'
            onChange={e => setQuery(e.target.value)}
            value={query}
            onKeyPress={search}
          />
        </div>
        {(typeof weather.main != 'undefined') ? (
          <div className="location-box">
            <div className="location">{weather.name}, {weather.sys.country}</div>
            <div className="date">{date}</div>



            <div className="weather-box">
              <div className="temp">{Math.round(weather.main.temp)}&#176;c</div>
              <div className="weather">{weather.weather[0].main}</div>
            </div>

          </div>

        ) : (
          ''

        )}


      </main>

    </div>
  );
}

export default App;
