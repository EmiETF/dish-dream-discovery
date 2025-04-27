
import React from 'react';
import { Link } from 'react-router-dom';
import { Star, MapPin } from 'lucide-react';
import { Badge } from './ui/badge';

interface DishCardProps {
  id: string;
  name: string;
  slug: string;
  imageUrl: string;
  description: string;
  craveRank: number;
  culinaryCred: number;
  buzz: number;
  priceRange: string;
  location: string;
}

const DishCard = ({ 
  id, 
  name, 
  slug, 
  imageUrl, 
  description,
  craveRank,
  culinaryCred,
  buzz,
  priceRange,
  location
}: DishCardProps) => {
  return (
    <Link to={`/dishes/${slug}`}>
      <div className="bg-white border border-gray-200 rounded-xl overflow-hidden transition-shadow hover:shadow-lg flex h-[200px]">
        {/* Left side - Image */}
        <div className="w-1/2 overflow-hidden">
          <img 
            src="/lovable-uploads/ac7c25ce-891c-478f-92ed-14cda8f2381f.png"
            alt={name} 
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right side - Content */}
        <div className="w-1/2 p-4 flex flex-col justify-between">
          <div>
            {/* Restaurant Name */}
            <h3 className="text-2xl font-semibold mb-2">{name}</h3>
            
            {/* Crave Rank */}
            <div className="mb-3">
              <div className="text-lg flex items-center gap-2">
                <span className="text-gray-700">Crave rank:</span>
                <span className="text-yellow-400">
                  {"★".repeat(craveRank)}{"☆".repeat(5 - craveRank)}
                </span>
              </div>
            </div>
            
            {/* Buzz Badge */}
            <Badge variant="secondary" className="bg-blue-50 text-blue-700 hover:bg-blue-100 mb-2">
              Buzz {Array(buzz).fill("🔥").join("")}
            </Badge>
            
            {/* Culinary Cred Badge */}
            <Badge variant="secondary" className="bg-green-50 text-green-700 hover:bg-green-100 block mb-2">
              Culinary cred {Array(culinaryCred).fill("👨‍🍳").join("")}
            </Badge>
          </div>
          
          {/* Price and Location */}
          <div className="flex items-center text-gray-600 gap-2">
            <span className="text-lg font-medium">{priceRange}</span>
            <span>•</span>
            <div className="flex items-center">
              <MapPin size={16} className="mr-1" />
              <span>{location}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default DishCard;
