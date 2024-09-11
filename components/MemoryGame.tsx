'use client';

import React, { useEffect, useState } from 'react';
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
  const [solved, setSolved] = useState<number[]>([]);

  useEffect(() => {
  if (flipped.length === 2) {
    const checkForMatch = () => {
      const [first, second] = flipped;

      if (cards[first] === cards[second]) {
        setSolved([...solved, ...flipped]);
      }
      setFlipped([]);
    };
    
    if(flipped.length === 2) {
      setTimeout(() => {
        checkForMatch();
      }, 1000);
    }
    
  }
}, [cards, flipped, solved]);

  const handleClick = (index: number) => {
  if (!flipped.includes(index) && flipped.length < 2) {
    setFlipped([...flipped, index]);
  }
};

  return (
    <div>
      <div className='grid grid-cols-4 gap-5'>
        {cards.map((card, index) => (
          <div
            key={index}
            onClick={() => handleClick(index)}
            className={`flex justify-center items-center text-4xl font-bold text-black w-28 bg-slate-200 h-28 transform cursor-pointer transition-transform duration-300 ${flipped.includes(index) || solved.includes(index) ? 'rotate-180' : ''}`}
          >
            {flipped.includes(index) || solved.includes(index) ? (
              <img className='rotate-180' src={`/memoryCards/${card}.webp`} alt='Memory Card' />
            ) : (
              '?'
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
