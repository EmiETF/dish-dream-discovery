
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SearchBar from '../components/SearchBar';
import DishCard from '../components/DishCard';
import { dishes, getAllDishCategories, getDishesByCategory } from '../data/mockData';
import { Link } from 'react-router-dom';

const Dishes = () => {
  // Group dishes by category
  const categories = getAllDishCategories();
  
  // Get popular dishes for the "Top dishes" section
  const topDishes = dishes.slice(0, 3);
  
  // Create an object with category names as keys and category dishes as values
  const dishesByCategory: { [key: string]: typeof dishes } = {};
  categories.forEach(category => {
    dishesByCategory[category] = getDishesByCategory(category);
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="bg-primary text-white py-16 px-4">
        <div className="container mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-2">Dishes</h1>
          <p className="text-lg mb-8">Best Dish Finder's online encyclopedia of best dishes</p>
          
          <SearchBar placeholder="Search city, neighborhood or zipcode" />
          
          <div className="mt-4">
            <span className="text-sm mr-2">Popular searches:</span>
            <Link to="/dishes/pizza" className="text-sm text-primary-accent hover:underline mr-3">
              Pizza
            </Link>
            <Link to="/dishes/taco" className="text-sm text-primary-accent hover:underline mr-3">
              Taco
            </Link>
            <Link to="/dishes/sushi" className="text-sm text-primary-accent hover:underline mr-3">
              Sushi
            </Link>
            <Link to="/dishes/butter-chicken" className="text-sm text-primary-accent hover:underline">
              Butter chicken
            </Link>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-8">
        {/* Top Dishes */}
        <div className="mb-10">
          <h2 className="text-2xl font-bold mb-6">Top dishes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {topDishes.map(dish => (
              <DishCard 
                key={dish.id}
                id={dish.id}
                name={dish.name}
                slug={dish.slug}
                imageUrl={dish.imageUrl}
                description={dish.description}
                craveRank={5}
                culinaryCred={4}
                buzz={4}
                priceRange="$$"
                location="Various Locations"
              />
            ))}
          </div>
        </div>
        
        {/* Dishes by Category */}
        {categories.map(category => (
          <div key={category} className="mb-10">
            <h2 className="text-2xl font-bold mb-6">{category}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {dishesByCategory[category].slice(0, 3).map(dish => (
                <DishCard 
                  key={dish.id}
                  id={dish.id}
                  name={dish.name}
                  slug={dish.slug}
                  imageUrl={dish.imageUrl}
                  description={dish.description}
                  craveRank={4}
                  culinaryCred={3}
                  buzz={3}
                  priceRange="$$$"
                  location="Top Restaurants"
                />
              ))}
            </div>
          </div>
        ))}
      </div>
      
      <Footer />
    </div>
  );
};

export default Dishes;
