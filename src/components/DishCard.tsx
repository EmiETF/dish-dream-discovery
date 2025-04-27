
import React from 'react';
import { Link } from 'react-router-dom';
import { Star, Flame, ChefHat } from 'lucide-react';
import { Card } from './ui/card';
import { AspectRatio } from './ui/aspect-ratio';

interface DishCardProps {
  id: string;
  name: string;
  slug: string;
  imageUrl: string;
  description?: string;
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
  craveRank = 5,
  culinaryCred = 5,
  buzz = 5,
  priceRange = "$$",
  location = "Manhattan",
}: DishCardProps) => {
  return (
    <Link to={`/dishes/${slug}`}>
      <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-200">
        <div className="flex flex-col md:flex-row h-full">
          {/* Left side - Image */}
          <div className="w-full md:w-2/5 relative">
            <AspectRatio ratio={4/3} className="bg-gray-100">
              <img 
                src={imageUrl} 
                alt={name}
                className="w-full h-full object-cover rounded-tl-lg rounded-tr-lg md:rounded-tr-none md:rounded-bl-lg"
              />
            </AspectRatio>
          </div>
          
          {/* Right side - Content */}
          <div className="p-6 flex-1 flex flex-col gap-4">
            <h3 className="text-2xl font-bold text-gray-900">{name}</h3>
            
            {/* Ratings Section */}
            <div className="space-y-3">
              {/* Crave Rank */}
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium text-gray-600 w-24">Crave rank:</span>
                <div className="flex text-yellow-400">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star 
                      key={index}
                      size={20}
                      fill={index < craveRank ? "currentColor" : "none"}
                      className={index < craveRank ? "text-yellow-400" : "text-gray-300"}
                    />
                  ))}
                </div>
              </div>
              
              {/* Buzz */}
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium text-gray-600 w-24">Buzz:</span>
                <div className="inline-flex items-center bg-gray-100 rounded-full px-4 py-1">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Flame
                      key={index}
                      size={18}
                      fill={index < buzz ? "currentColor" : "none"}
                      className={index < buzz ? "text-orange-500" : "text-gray-300"}
                    />
                  ))}
                </div>
              </div>
              
              {/* Culinary Cred */}
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium text-gray-600 w-24">Culinary cred:</span>
                <div className="inline-flex items-center bg-gray-100 rounded-full px-4 py-1">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <ChefHat
                      key={index}
                      size={18}
                      fill={index < culinaryCred ? "currentColor" : "none"}
                      className={index < culinaryCred ? "text-purple-500" : "text-gray-300"}
                    />
                  ))}
                </div>
              </div>
            </div>
            
            {/* Price and Location */}
            <div className="mt-auto">
              <span className="text-sm text-gray-500">
                {priceRange} • {location}
              </span>
            </div>
          </div>
        </div>
      </Card>
    </Link>
  );
};

export default DishCard;
