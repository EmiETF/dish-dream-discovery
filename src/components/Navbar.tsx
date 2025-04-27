
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center py-4 px-5 bg-primary text-white">
      <Link to="/" className="text-xl font-bold">Best Dish Finder</Link>
      <div className="flex space-x-6">
        <Link to="/" className="hover:underline">Home</Link>
        <Link to="/cities" className="hover:underline">Cities & neighborhoods</Link>
        <Link to="/dishes" className="hover:underline">Dishes</Link>
      </div>
    </nav>
  );
};

export default Navbar;
