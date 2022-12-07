import React from 'react';
import { Link } from 'react-router-dom';

export const Navigation = () => {
  return (
    <nav className=" py-2 flex justify-around items-center bg-gray-500 text-white">
      <h3 className="font-bold">GitHub Search</h3>
      <menu className="flex gap-x-2">
        <Link to="/">Home</Link>
        <Link to="/favorites">Favorites</Link>
      </menu>
    </nav>
  );
};
