
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SearchBar from '../components/SearchBar';
import CityCard from '../components/CityCard';
import { cities } from '../data/mockData';

const Cities = () => {
  // Group cities by country (in this case, all are USA)
  const cityGroups = {
    'Top cities & neighborhoods': cities.slice(0, 3),
    'American cities': cities.slice(0, 6)
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="bg-primary text-white py-16 px-4">
        <div className="container mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-2">Cities</h1>
          <p className="text-lg mb-8">Best Dish Finder's online encyclopedia of best dishes</p>
          
          <SearchBar placeholder="Search city, neighborhood or zipcode" />
          
          <div className="mt-4">
            <span className="text-sm mr-2">Popular searches:</span>
            <Link to="/cities/new-york-city/manhattan" className="text-sm text-primary-accent hover:underline mr-3">
              Manhattan
            </Link>
            <Link to="/cities/new-york-city/brooklyn" className="text-sm text-primary-accent hover:underline mr-3">
              Brooklyn
            </Link>
            <Link to="/cities/los-angeles/downtown" className="text-sm text-primary-accent hover:underline">
              Downtown Los Angeles
            </Link>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-8">
        {Object.entries(cityGroups).map(([groupName, groupCities]) => (
          <div key={groupName} className="mb-10">
            <h2 className="text-2xl font-bold mb-6">{groupName}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {groupCities.map(city => (
                <CityCard 
                  key={city.id}
                  id={city.id}
                  name={city.name}
                  state={city.state}
                  slug={city.slug}
                  imageUrl={city.imageUrl}
                  description={city.description}
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

export default Cities;
