
import React from 'react';
import { Link } from 'react-router-dom';
import { Star, Flame, ChefHat, DollarSign, MapPin } from 'lucide-react';

interface DishCardProps {
  id: string;
  name: string;
  slug: string;
  imageUrl: string;
  description: string;
  craveRank?: number;
  culinaryCred?: number;
  buzz?: number;
  priceRange?: string;
  location?: string;
  category?: string;
  showCategory?: boolean;
}

const DishCard = ({ 
  id, 
  name, 
  slug, 
  imageUrl, 
  description,
  craveRank = 3,
  culinaryCred = 3,
  buzz = 3,
  priceRange = "$",
  location = "Various locations",
  category,
  showCategory = false
}: DishCardProps) => {
  return (
    <Link to={`/dishes/${slug}`} className="block">
      <div className="border border-gray-200 rounded-lg overflow-hidden h-full transition-transform hover:shadow-md">
        <div className="flex flex-col md:flex-row">
          {/* Left side - Image */}
          <div className="w-full md:w-2/5 h-48 md:h-full">
            <img 
              src={imageUrl} 
              alt={name} 
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Right side - Content */}
          <div className="p-4 flex-1">
            <h3 className="text-2xl font-semibold mb-3">{name}</h3>
            
            {showCategory && category && (
              <div className="text-sm text-gray-500 mb-2">{category}</div>
            )}
            
            {/* Crave Rank */}
            <div className="flex items-center mb-3">
              <span className="text-lg font-medium mr-2">Crave rank:</span>
              <div className="flex text-yellow-400">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star 
                    key={index} 
                    size={20} 
                    fill={index < craveRank ? "currentColor" : "none"}
                  />
                ))}
              </div>
            </div>
            
            {/* Buzz */}
            <div className="bg-gray-50 rounded-full px-4 py-2 inline-flex items-center mb-2 mr-2">
              <span className="font-medium mr-2">Buzz</span>
              <div className="flex text-orange-500">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Flame 
                    key={index} 
                    size={16} 
                    fill={index < buzz ? "currentColor" : "none"}
                  />
                ))}
              </div>
            </div>
            
            {/* Culinary Cred */}
            <div className="bg-gray-50 rounded-full px-4 py-2 inline-flex items-center mb-2">
              <span className="font-medium mr-2">Culinary cred</span>
              <div className="flex text-purple-500">
                {Array.from({ length: 5 }).map((_, index) => (
                  <ChefHat 
                    key={index} 
                    size={16} 
                    fill={index < culinaryCred ? "currentColor" : "none"}
                  />
                ))}
              </div>
            </div>
            
            {/* Price and Location */}
            <div className="flex items-center text-gray-600 mt-2">
              <span className="flex items-center">
                <DollarSign size={16} className="mr-1" />
                {priceRange}
              </span>
              <span className="mx-2">•</span>
              <span className="flex items-center">
                <MapPin size={16} className="mr-1" />
                {location}
              </span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default DishCard;
