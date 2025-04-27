
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SearchBar from '../components/SearchBar';
import CityCard from '../components/CityCard';
import DishCard from '../components/DishCard';
import { getCityBySlug, dishes } from '../data/mockData';

const CityDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  
  // Get city details
  const city = getCityBySlug(slug || '');
  if (!city) {
    return <div>City not found</div>;
  }
  
  // Get neighborhoods in this city
  const neighborhoods = city.neighborhoods;
  
  // Get popular dishes from this city (for demo, just using all dishes)
  const popularDishes = dishes.slice(0, 3);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="bg-primary text-white py-8 px-4">
        <div className="container mx-auto">
          <div className="text-sm mb-3">
            <Link to="/" className="text-white hover:underline">Home</Link>
            <span className="mx-2">›</span>
            <Link to="/cities" className="text-white hover:underline">Cities</Link>
            <span className="mx-2">›</span>
            <Link to={`/cities/${city.slug}`} className="text-white hover:underline">{city.name}</Link>
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold">{city.name}</h1>
          <p className="mt-2">{city.description}</p>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-8">
        {/* Search bar for this city */}
        <div className="mb-8">
          <SearchBar placeholder={`Search for dishes in ${city.name}`} />
        </div>
        
        {/* Neighborhoods in this city */}
        {neighborhoods.length > 0 && (
          <div className="mb-10">
            <h2 className="text-2xl font-bold mb-6">Neighborhoods in {city.name}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {neighborhoods.map(neighborhood => (
                <Link 
                  key={neighborhood.id} 
                  to={`/cities/${city.slug}/${neighborhood.slug}`}
                  className="block border border-gray-200 rounded-lg overflow-hidden transition-transform hover:shadow-md"
                >
                  <div className="aspect-video overflow-hidden">
                    <img 
                      src={neighborhood.imageUrl} 
                      alt={neighborhood.name} 
                      className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold mb-1">{neighborhood.name}</h3>
                    <p className="text-sm text-gray-600 line-clamp-2">{neighborhood.description}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
        
        {/* Popular dishes in this city */}
        <div className="mb-10">
          <h2 className="text-2xl font-bold mb-6">Popular dishes in {city.name}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {popularDishes.map(dish => (
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
        
        {/* Best restaurants in this city */}
        <div>
          <h2 className="text-2xl font-bold mb-6">Best restaurants in {city.name}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((item) => (
              <div key={item} className="border border-gray-200 rounded-lg overflow-hidden">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src="/lovable-uploads/7ffa2e95-8986-4f2f-a921-aad6ebd72fd5.png"
                    alt={`Restaurant ${item}`}
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-1">Restaurant Name</h3>
                  <p className="text-sm text-gray-600 mb-2">
                    Elegant dining spot with creative cuisine and an extensive wine list
                  </p>
                  <div className="flex items-center text-sm text-gray-500">
                    <span className="mr-2">$$</span>
                    <span>•</span>
                    <span className="mx-2">Manhattan</span>
                  </div>
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

export default CityDetail;
