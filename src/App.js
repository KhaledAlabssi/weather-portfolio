
import './App.css';

const api = {
  key: process.env.REACT_APP_API_KEY,
  base: 'https://api.openweathermap.org/data/2.5/'
}
function App() {
  return (
    <div className="App">
      <main>
        <div className="search-box">
          <input
            type='text'
            className='search-bar'
            placeholder='Search...'
          />
        </div>

      </main>
      
    </div>
  );
}

export default App;
