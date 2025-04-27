import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import SearchBar from '../components/SearchBar';
import Footer from '../components/Footer';
import DishCard from '../components/DishCard';
import { getPopularDishes } from '../data/mockData';

const Home = () => {
  const popularDishes = getPopularDishes();

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="bg-primary text-white py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-2">
            Crave it? <span className="text-primary-accent">Find it.</span>
          </h1>
          <p className="text-lg mb-8">The ultimate best dish directory for true food obsessives.</p>
          
          <SearchBar placeholder="Search for dish, city or neighborhood" />
          
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
          <div className="flex border-b border-gray-200 mb-6">
            <Link to="/cities/new-york-city" className="py-2 px-4 border-b-2 border-primary text-primary font-medium">
              New York City
            </Link>
            <Link to="/cities/los-angeles" className="py-2 px-4 text-gray-600 hover:text-primary">
              Los Angeles
            </Link>
            <Link to="/cities/san-francisco" className="py-2 px-4 text-gray-600 hover:text-primary">
              San Francisco
            </Link>
            <Link to="/cities" className="py-2 px-4 text-gray-600 hover:text-primary flex items-center">
              More <span className="ml-1">›</span>
            </Link>
          </div>
          
          {/* Dish categories */}
          <div>
            {['Bagel', 'Burger', 'Deli Sandwich', 'Pizza'].map((category) => (
              <div key={category} className="mb-12">
                <div className="mb-4">
                  <Link to={`/dishes/${category.toLowerCase()}`} className="text-xl font-semibold hover:underline">
                    {category}
                  </Link>
                </div>
                
                <div className="grid grid-cols-1 gap-6">
                  {[1, 2, 3].map((index) => (
                    <DishCard 
                      key={`${category}-${index}`}
                      id={`${index}`}
                      name={category === 'Bagel' ? 'Big Apple Bagels' : 'Anchor & James'}
                      slug={category.toLowerCase()}
                      imageUrl={category === 'Bagel' 
                        ? "/lovable-uploads/96504c4c-1050-4c69-acf5-c6c84099bf52.png"
                        : "/lovable-uploads/6e084c17-0ee1-4e98-bcb4-f554e25c98d4.png"}
                      description={`The best ${category.toLowerCase()} in town`}
                      craveRank={4}
                      buzzLevel={3}
                      culinaryCred={4}
                      priceRange="$$"
                      location="Manhattan"
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Home;
