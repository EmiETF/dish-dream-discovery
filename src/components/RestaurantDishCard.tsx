
import React from 'react';
import { Link } from 'react-router-dom';
import { Star, MapPin } from 'lucide-react';
import { Restaurant } from '../types';

interface RestaurantDishCardProps {
  restaurant: Restaurant;
  dishId: string;
  dishSlug: string;
}

const RestaurantDishCard = ({ restaurant, dishId, dishSlug }: RestaurantDishCardProps) => {
  // Find the specific dish in this restaurant
  const dishInfo = restaurant.dishes.find(d => d.dishId === dishId);
  
  if (!dishInfo) return null;
  
  return (
    <Link to={`/dishes/${dishSlug}/${restaurant.id}`} className="block w-full mb-4">
      <div className="border border-gray-200 rounded-lg overflow-hidden flex flex-col md:flex-row">
        <div className="w-full md:w-1/4 h-48 md:h-auto">
          <img 
            src={dishInfo.imageUrl} 
            alt={restaurant.name} 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-4 flex-1">
          <h3 className="text-xl font-semibold mb-1">{restaurant.name}</h3>
          
          <div className="mb-2">
            <div className="text-sm font-medium">Crave rank: 
              <span className="text-primary-accent ml-1">
                {"★".repeat(dishInfo.craveRank)}
                {"☆".repeat(5 - dishInfo.craveRank)}
              </span>
            </div>
            
            <div className="text-xs px-2 py-1 bg-blue-100 text-blue-800 rounded-full inline-block mr-2 mt-1">
              Buzz {dishInfo.buzz}/5
            </div>
            
            <div className="text-xs px-2 py-1 bg-green-100 text-green-800 rounded-full inline-block mt-1">
              Culinary cred {dishInfo.culinaryCred}/5
            </div>
          </div>
          
          <div className="flex items-center mt-3 text-gray-500">
            <span className="font-medium">{dishInfo.priceRange}</span>
            <span className="mx-2">•</span>
            <div className="flex items-center">
              <MapPin size={14} className="mr-1" />
              <span>{restaurant.neighborhoodId === "101" ? "Manhattan" : "Brooklyn"}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default RestaurantDishCard;
