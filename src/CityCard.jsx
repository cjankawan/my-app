import React from 'react';

const CityCard = ({ city }) => {
  return (
    <div className="city-container">
      <img className="city-image" src={city.img} alt={city.name} />
      <div className="city-details">
        <div className="city-name">{city.name}</div>
        <div className="city-country">{city.country}</div>
        <div className="city-info">
          <div className="city-description">{city.dics}</div>
        </div>
      </div>
    </div>
  );
};

export default CityCard;
