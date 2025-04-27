
import React from 'react';
import { Link } from 'react-router-dom';
import { Star, Flame, ChefHat, DollarSign, MapPin } from 'lucide-react';
import { Card } from './ui/card';

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
      <Card className="overflow-hidden h-full transition-transform hover:shadow-md">
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
            <h3 className="text-2xl font-semibold mb-2">{name}</h3>
            
            {showCategory && category && (
              <div className="text-sm text-gray-500 mb-2">{category}</div>
            )}
            
            {/* Ratings Grid */}
            <div className="grid grid-cols-1 gap-2 mb-3">
              {/* Crave Rank */}
              <div className="flex items-center">
                <span className="text-sm font-medium mr-2 w-24">Crave rank:</span>
                <div className="flex text-yellow-400">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star 
                      key={index} 
                      size={16} 
                      fill={index < craveRank ? "currentColor" : "none"}
                    />
                  ))}
                </div>
              </div>
              
              {/* Buzz */}
              <div className="flex items-center">
                <span className="text-sm font-medium mr-2 w-24">Buzz:</span>
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
              <div className="flex items-center">
                <span className="text-sm font-medium mr-2 w-24">Culinary cred:</span>
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
            </div>
            
            {/* Price and Location */}
            <div className="flex flex-col text-gray-600 text-sm gap-1 mt-2">
              <span className="flex items-center">
                <DollarSign size={14} className="mr-1" />
                <span className="font-medium">{priceRange}</span>
              </span>
              <span className="flex items-center">
                <MapPin size={14} className="mr-1" />
                {location}
              </span>
            </div>
          </div>
        </div>
      </Card>
    </Link>
  );
};

export default DishCard;
