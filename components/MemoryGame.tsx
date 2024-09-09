'use client';

import React, { useState } from 'react';
import Image from 'next/image';

const generateDeck = () => {
  const memoryCards = [
    'ciaz',
    'fortuner',
    'innova',
    'hector',
    'scorpio',
    'tesla',
    'verna',
    'wagonr',
  ];

  const deck = [...memoryCards, ...memoryCards];
  return deck.sort(() => Math.random() - 0.5);
};

export default function MemoryGame() {
  const [cards, setCards] = useState<string[]>(generateDeck());
  const [flipped, setFlipped] = useState<number[]>([]);

  const handleClick = (index: number) => {
    setFlipped([...flipped, index]);
  };

  return (
    <div>
      <div className='grid grid-cols-4 gap-5'>
        {cards.map((card, index) => (
          <div
            key={index}
            onClick={() => handleClick(index)}
            className='w-28 h-28 transform cursor-pointer relative'
          >
            {flipped.includes(index) ? (
              <Image 
                src={`/images/${card}.webp`} 
                alt='Memory Card' 
                fill 
                style={{ objectFit: 'cover' }} 
              />
            ) : (
              <div className="flex items-center justify-center w-full h-full bg-gray-200">
                ?
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
