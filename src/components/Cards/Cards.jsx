import React from 'react';
import Card from '../Card/Card.jsx';
import './Cards.css';
const Cards = ({cards, title}) => {

  const onEdit = () => {
    console.log('onEdit');
  };
  const onDelete = () => {
    console.log('onDelete');
  };
  const onMove = () => {
    console.log('onMove');
  };
  return (
    <div className="cards">
      <h2 className='cards__title'>{title}</h2>
      {cards.map((card, i) => (
        <Card
          title={card.title}
          key={card.id}
          onEdit={onEdit}
          onDelete={onDelete}
          onMove={onMove}
        />
      ))}
    </div>
  );
};

export default Cards;
