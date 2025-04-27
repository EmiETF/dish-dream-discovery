
import React from 'react';
import { Link } from 'react-router-dom';
import { dishes } from '../data/mockData';

const Footer = () => {
  // Get random dishes for the footer
  const popularDishes = dishes.slice(0, 8);
  
  // Split the dishes into columns
  const column1 = popularDishes.slice(0, 4);
  const column2 = popularDishes.slice(4, 8);

  return (
    <footer className="bg-primary text-white pt-8 pb-6">
      <div className="container mx-auto px-4">
        <h3 className="text-lg font-medium mb-4">Popular dish</h3>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div>
            {column1.map(dish => (
              <div key={dish.id} className="mb-2">
                <Link to={`/dishes/${dish.slug}`} className="hover:underline">
                  {dish.name}
                </Link>
              </div>
            ))}
          </div>
          <div>
            {column2.map(dish => (
              <div key={dish.id} className="mb-2">
                <Link to={`/dishes/${dish.slug}`} className="hover:underline">
                  {dish.name}
                </Link>
              </div>
            ))}
          </div>
          <div>
            {column1.map(dish => (
              <div key={`type-${dish.id}`} className="mb-2">
                <Link to={`/dishes?category=${dish.category}`} className="hover:underline">
                  {dish.category}
                </Link>
              </div>
            ))}
          </div>
          <div>
            {column2.map(dish => (
              <div key={`area-${dish.id}`} className="mb-2">
                <Link to={`/dishes?category=${dish.category}`} className="hover:underline">
                  {dish.category}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
