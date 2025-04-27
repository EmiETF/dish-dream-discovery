
import React from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SearchBar from '../components/SearchBar';
import DishCard from '../components/DishCard';
import { dishes } from '../data/mockData';

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';
  
  // Simple search function that matches dish name, category or description
  const filteredDishes = dishes.filter(dish => 
    dish.name.toLowerCase().includes(query.toLowerCase()) ||
    dish.category.toLowerCase().includes(query.toLowerCase()) ||
    dish.description.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="bg-primary text-white py-8 px-4">
        <div className="container mx-auto">
          <h1 className="text-2xl md:text-3xl font-bold mb-4">Search results for: "{query}"</h1>
          <SearchBar />
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-8">
        {filteredDishes.length > 0 ? (
          <div>
            <p className="mb-6 text-gray-600">Found {filteredDishes.length} result(s)</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredDishes.map(dish => (
                <DishCard 
                  key={dish.id}
                  id={dish.id}
                  name={dish.name}
                  slug={dish.slug}
                  imageUrl={dish.imageUrl}
                  description={dish.description}
                  category={dish.category}
                  showCategory={true}
                />
              ))}
            </div>
          </div>
        ) : (
          <div className="text-center py-12">
            <h2 className="text-2xl font-bold mb-2">No results found</h2>
            <p className="text-gray-600 mb-6">We couldn't find any dishes matching "{query}"</p>
            <Link to="/" className="text-primary hover:underline">
              Return to homepage
            </Link>
          </div>
        )}
      </div>
      
      <Footer />
    </div>
  );
};

export default SearchResults;
