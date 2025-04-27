import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import SearchBar from '../components/SearchBar';
import Footer from '../components/Footer';
import DishCard from '../components/DishCard';
import { getPopularDishes, getTopCities } from '../data/mockData';

const Home = () => {
  const popularDishes = getPopularDishes();
  const topCities = getTopCities();

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="bg-primary text-white py-16 px-4">
        <div className="container mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-2">
            Crave it? <span className="text-primary-accent">Find it.</span>
          </h1>
          <p className="text-lg mb-8">The ultimate best dish directory for true food obsessives.</p>
          
          <SearchBar />
          
          <div className="mt-4">
            <span className="text-sm mr-2">Popular searches:</span>
            <Link to="/dishes/bagel?city=new-york-city" className="text-sm text-primary-accent hover:underline mr-3">
              Best New York Bagel
            </Link>
            <Link to="/dishes/taco?city=los-angeles" className="text-sm text-primary-accent hover:underline mr-3">
              Best Los Angeles Taco
            </Link>
            <Link to="/dishes/pizza?city=chicago" className="text-sm text-primary-accent hover:underline">
              Best Chicago Pizza
            </Link>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-10">
          <div className="flex border-b border-gray-300 mb-6">
            <Link to="/cities/new-york-city" className="py-2 px-4 border-b-2 border-primary text-primary font-medium">
              New York City
            </Link>
            <Link to="/cities/los-angeles" className="py-2 px-4 hover:text-primary">
              Los Angeles
            </Link>
            <Link to="/cities/san-francisco" className="py-2 px-4 hover:text-primary">
              San Francisco
            </Link>
            <Link to="/cities" className="py-2 px-4 hover:text-primary flex items-center">
              More <span className="ml-1">›</span>
            </Link>
          </div>
          
          {/* Dishes in selected city (New York) */}
          <div>
            <div className="mb-4">
              <Link to="/dishes/bagel" className="text-xl font-semibold hover:underline">
                Bagel
              </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {popularDishes.map(dish => (
                <DishCard 
                  key={dish.id}
                  id={dish.id}
                  name={dish.name}
                  slug={dish.slug}
                  imageUrl={dish.imageUrl}
                  description={dish.description}
                />
              ))}
            </div>
            
            {/* Other dish categories follow the same pattern */}
            <div className="mt-8 mb-4">
              <Link to="/dishes/burger" className="text-xl font-semibold hover:underline">
                Burger
              </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {popularDishes.map(dish => (
                <DishCard 
                  key={`burger-${dish.id}`}
                  id={dish.id}
                  name="Anchor & James"
                  slug={dish.slug}
                  imageUrl="/lovable-uploads/6e084c17-0ee1-4e98-bcb4-f554e25c98d4.png"
                  description="A juicy burger with premium beef, topped with special sauce and aged cheddar."
                />
              ))}
            </div>
            
            <div className="mt-8 mb-4">
              <Link to="/dishes/deli-sandwich" className="text-xl font-semibold hover:underline">
                Deli Sandwich
              </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {popularDishes.map(dish => (
                <DishCard 
                  key={`deli-${dish.id}`}
                  id={dish.id}
                  name="Anchor & James"
                  slug={dish.slug}
                  imageUrl="/lovable-uploads/6e084c17-0ee1-4e98-bcb4-f554e25c98d4.png"
                  description="A classic deli sandwich with premium ingredients and house-made condiments."
                />
              ))}
            </div>
            
            <div className="mt-8 mb-4">
              <Link to="/dishes/pizza" className="text-xl font-semibold hover:underline">
                Pizza
              </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {popularDishes.map(dish => (
                <DishCard 
                  key={`pizza-${dish.id}`}
                  id={dish.id}
                  name="Anchor & James"
                  slug={dish.slug}
                  imageUrl="/lovable-uploads/fc42acf5-dd30-4b9c-b86b-39be70e8d158.png"
                  description="Thin-crust pizza with fresh, local ingredients and house-made mozzarella."
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Home;
