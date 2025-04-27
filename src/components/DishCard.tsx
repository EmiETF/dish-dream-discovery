
import React from 'react';
import { Link } from 'react-router-dom';
import RatingDisplay from './RatingDisplay';
import PillRating from './PillRating';

interface DishCardProps {
  id: string;
  name: string;
  slug: string;
  imageUrl: string;
  description: string;
  category?: string;
  showCategory?: boolean;
  craveRank?: number;
  buzzLevel?: number;
  culinaryCred?: number;
  priceRange?: string;
  location?: string;
}

const DishCard = ({ 
  id, 
  name, 
  slug, 
  imageUrl, 
  description,
  category,
  showCategory = false,
  craveRank = 4,
  buzzLevel = 3,
  culinaryCred = 4,
  priceRange = "$$",
  location = "Manhattan"
}: DishCardProps) => {
  return (
    <Link to={`/dishes/${slug}`} className="block">
      <div className="flex flex-col md:flex-row gap-4 border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow p-4">
        {/* Image Section */}
        <div className="w-full md:w-1/3">
          <div className="aspect-video md:aspect-square rounded-lg overflow-hidden">
            <img 
              src={imageUrl} 
              alt={name}
              className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>

        {/* Content Section */}
        <div className="w-full md:w-2/3 flex flex-col gap-3">
          <h3 className="text-xl font-semibold">{name}</h3>
          
          {/* Ratings Section */}
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="text-gray-600 min-w-20">Crave rank:</span>
              <RatingDisplay rating={craveRank} size={18} />
            </div>
            
            <PillRating label="Buzz" rating={buzzLevel} type="buzz" />
            <PillRating label="Culinary cred" rating={culinaryCred} type="culinary" />
          </div>

          {/* Location and Price */}
          <div className="text-sm text-gray-500 mt-auto">
            {priceRange} • {location}
          </div>

          {showCategory && category && (
            <div className="text-sm text-gray-500">{category}</div>
          )}
        </div>
      </div>
    </Link>
  );
};

export default DishCard;

