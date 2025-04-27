
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SearchBar from '../components/SearchBar';
import RestaurantDishCard from '../components/RestaurantDishCard';
import RatingDisplay from '../components/RatingDisplay';
import { MapPin, Clock, ChevronLeft, ChevronRight } from 'lucide-react';
import { getDishBySlug, getRestaurantsByDish, getReviewsByDish } from '../data/mockData';

const DishDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  
  // Get dish details
  const dish = getDishBySlug(slug || '');
  if (!dish) {
    return <div>Dish not found</div>;
  }
  
  // Get restaurants that serve this dish
  const restaurants = getRestaurantsByDish(dish.id);
  
  // Get reviews for this dish
  const reviews = getReviewsByDish(dish.id);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="bg-primary text-white py-8 px-4">
        <div className="container mx-auto">
          <div className="text-sm mb-3">
            <Link to="/" className="text-white hover:underline">Home</Link>
            <span className="mx-2">›</span>
            <Link to={`/dishes/${slug}`} className="text-white hover:underline">{dish.name}</Link>
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold">{dish.name}</h1>
          
          {restaurants.length > 0 && (
            <div className="flex items-center mt-2">
              <RatingDisplay rating={4.4} />
              <span className="ml-2 text-sm">
                (<Link to="#reviews" className="underline">1.5k reviews</Link>)
              </span>
              <span className="mx-3">•</span>
              <span className="text-sm">$20 - 30</span>
            </div>
          )}
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-8">
        {/* Search filters for this dish */}
        <div className="mb-6">
          <SearchBar placeholder={`New York City ${dish.name}`} />
        </div>
        
        {/* Results section */}
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Left content - filters and dish results */}
          <div className="w-full lg:w-7/12">
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center">
                <span className="font-medium">Filter</span>
                <button className="ml-4 text-sm text-blue-600 hover:underline">Clear filters</button>
              </div>
              <div className="flex items-center text-sm">
                <span>Found {restaurants.length} results</span>
                <div className="ml-4">
                  <span className="mr-2">Sort by:</span>
                  <select className="border rounded px-2 py-1">
                    <option>Food Obsession Score: High to Low</option>
                    <option>Crave Rank: High to Low</option>
                    <option>Price: Low to High</option>
                  </select>
                </div>
                <div className="ml-4">
                  <span className="mr-2">Results:</span>
                  <select className="border rounded px-2 py-1">
                    <option>1 - 10</option>
                    <option>11 - 20</option>
                  </select>
                </div>
              </div>
            </div>
            
            {/* Filters */}
            <div className="mb-6">
              <div className="mb-4">
                <h3 className="font-medium mb-2">Neighborhood</h3>
                <div>
                  <div className="flex items-center mb-1">
                    <input type="checkbox" id="manhattan" className="mr-2" checked />
                    <label htmlFor="manhattan">Manhattan (20)</label>
                  </div>
                  <div className="flex items-center mb-1">
                    <input type="checkbox" id="brooklyn" className="mr-2" />
                    <label htmlFor="brooklyn">Brooklyn (50)</label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="queens" className="mr-2" />
                    <label htmlFor="queens">Queens (5)</label>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="font-medium mb-2">Price $</h3>
                <div>
                  <div className="flex items-center mb-1">
                    <input type="checkbox" id="cheap" className="mr-2" />
                    <label htmlFor="cheap">Cheap (20)</label>
                  </div>
                  <div className="flex items-center mb-1">
                    <input type="checkbox" id="affordable" className="mr-2" checked />
                    <label htmlFor="affordable">Affordable (20)</label>
                  </div>
                  <div className="flex items-center mb-1">
                    <input type="checkbox" id="expensive" className="mr-2" />
                    <label htmlFor="expensive">Expensive (50)</label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="very-expensive" className="mr-2" />
                    <label htmlFor="very-expensive">Every expensive (5)</label>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Dish restaurant results */}
            <div>
              {restaurants.length > 0 ? (
                restaurants.map((restaurant) => (
                  <RestaurantDishCard 
                    key={restaurant.id}
                    restaurant={restaurant}
                    dishId={dish.id}
                    dishSlug={dish.slug}
                  />
                ))
              ) : (
                <div className="text-center py-8">
                  <p className="text-gray-500">No restaurants found for this dish.</p>
                </div>
              )}
            </div>
          </div>
          
          {/* Right content - Map */}
          <div className="w-full lg:w-5/12 h-96 lg:h-auto">
            <div className="bg-gray-200 rounded-lg h-full min-h-[400px] sticky top-4">
              <img 
                src="/placeholder.svg" 
                alt="Map" 
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default DishDetail;
