import React from 'react';
import '../../../styles/groundCard.css'; 

export const GroundCard = ({ pcard }) => {
 

  return (    
    <div className="ground-card">
      <img src={pcard.image} alt={pcard.name} />
      <h2>{pcard.name}</h2>
      <p>Rating: {pcard.rating}</p>
      <p>Side: {pcard.side}</p>
      <p>Type: {pcard.type}</p>
      <p>Points: {pcard.points}</p>
      <p>Price: ${pcard.price}</p>
    </div>
    
  );
};


