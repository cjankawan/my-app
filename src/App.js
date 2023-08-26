import React from 'react';

import citys from './data'
import CityCard from './CityCard'

import './App.css';
const App = () => {
    return (

      <div>

      <div class="title">CITIES TO VISITE IN EUROPE</div>

      <div class="city-grid">

        {citys.map((city, index) => (
        <CityCard key={index} city={city} />
        ))}
        
      </div>

      </div>
    );
}

export default App;
