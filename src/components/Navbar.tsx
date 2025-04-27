
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center py-4 px-4 md:px-8 bg-primary text-white">
      <Link to="/" className="text-xl md:text-2xl font-bold">
        Best Dish Finder
      </Link>
      <div className="flex space-x-6">
        <Link to="/" className="hover:text-primary-accent">Home</Link>
        <Link to="/cities" className="hover:text-primary-accent">Cities & neighborhoods</Link>
        <Link to="/dishes" className="hover:text-primary-accent">Dishes</Link>
      </div>
    </nav>
  );
};

export default Navbar;
