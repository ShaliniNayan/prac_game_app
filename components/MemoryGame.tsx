'use client';

import React from 'react';

const generateDeck = () => {
  const memoryCards = [
    'ciaz',
    'fortuner',
    'innova',
    'hector',
    'scropio',
    'telsa',
    'verna',
    'wagonr',
  ];

  const deck = [...memoryCards, ...memoryCards];
  return deck.sort(() => Math.random() - 0.5);
};

export default function MemoryGame() {
  return <div></div>;
}
