'use client';

import React, { useState } from 'react';

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
  const [cards, setCards] = useState<string[]>(generateDeck());
  return <div></div>;
}
