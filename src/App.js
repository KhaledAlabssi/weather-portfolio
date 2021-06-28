
import './App.css';

const api = {
  key: process.env.REACT_APP_API_KEY,
  base: 'https://api.openweathermap.org/data/2.5/'
}
function App() {

  let date = new Date().toDateString();
  

  return (
    <div className="App">
      <main>
        <div className="search-box">
          <input
            type='text'
            className='search-bar'
            placeholder='Search...'
          />
        <div className="location-box">
          <div className="location">Munich, Germany</div>
          <div className="date">{date}</div>
          
        </div>

        <div className="weather-box">
          <div className="temp">15&#176;c</div>
          <div className="weather">Sunny</div>
        </div>

        </div>

      </main>
      
    </div>
  );
}

export default App;
