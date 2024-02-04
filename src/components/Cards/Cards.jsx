import React from 'react';
import Card from '../Card/Card.jsx';
import './Cards.css';
const Cards = () => {
  const cards = [
    { title: 'первое задание', id: 111 },
    { title: 'второе задание', id: 222 },
  ];
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
