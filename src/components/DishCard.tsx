
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
    <Link to={`/dishes/${slug}`} className="block">
      <div className="bg-white border border-gray-200 rounded-xl overflow-hidden h-full transition-transform hover:shadow-lg">
        <div className="aspect-video overflow-hidden">
          <img 
            src={imageUrl} 
            alt={name} 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-4">
          <h3 className="text-2xl font-semibold mb-2">{name}</h3>
          
          {/* Crave Rank */}
          <div className="mb-3">
            <div className="text-lg">Crave rank: 
              <span className="text-yellow-400 ml-2">
                {"★".repeat(craveRank)}
                {"☆".repeat(5 - craveRank)}
              </span>
            </div>
          </div>
          
          {/* Buzz and Culinary Cred */}
          <div className="space-y-2 mb-3">
            <Badge variant="secondary" className="bg-blue-50 text-blue-700 hover:bg-blue-100">
              Buzz {Array(buzz).fill("🔥").join("")}
            </Badge>
            
            <div className="block">
              <Badge variant="secondary" className="bg-green-50 text-green-700 hover:bg-green-100">
                Culinary cred {Array(culinaryCred).fill("👨‍🍳").join("")}
              </Badge>
            </div>
          </div>
          
          {/* Price and Location */}
          <div className="flex items-center text-gray-600 mt-4">
            <span className="text-lg">{priceRange}</span>
            <span className="mx-2">•</span>
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
