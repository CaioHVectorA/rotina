import React from 'react';

type TStepsPresell = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14;

interface HeaderProps {
  currency?: number;
  step?: TStepsPresell;
}

export function Header({ currency, step }: HeaderProps) {
  return (
    <header className="w-full bg-black py-4 px-4 flex justify-center border-b border-gray-800 fixed top-0 left-0 right-0 z-50">
      <div className="max-w-md w-full flex justify-center">
        <img 
          src="/logo.jpg" 
          alt="TikTok Shop Logo" 
          className="h-12 w-auto object-contain"
        />
      </div>
    </header>
  );
}