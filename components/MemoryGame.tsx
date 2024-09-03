'use client';

import React, { useState } from 'react';
import Image from 'next/image';

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
  return (
    <div>
      <div className='grid grid-cols-4 gap-5'>
        {cards.map((card, index) => (
          <div key={index} className='w-28 h-28 transform cursor-pointer '>
            <Image src={`/images/${card}.webp`} fill alt={card} />
          </div>
        ))}
      </div>
    </div>
  );
}
