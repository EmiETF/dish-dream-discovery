
import React from 'react';
import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';

interface DishCardProps {
  id: string;
  name: string;
  slug: string;
  imageUrl: string;
  description: string;
  category?: string;
  showCategory?: boolean;
}

const DishCard = ({ 
  id, 
  name, 
  slug, 
  imageUrl, 
  description, 
  category, 
  showCategory = false 
}: DishCardProps) => {
  return (
    <Link to={`/dishes/${slug}`} className="block">
      <div className="border border-gray-200 rounded-lg overflow-hidden h-full transition-transform hover:shadow-md">
        <div className="aspect-video overflow-hidden">
          <img 
            src={imageUrl} 
            alt={name} 
            className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold mb-1">{name}</h3>
          {showCategory && category && (
            <div className="text-sm text-gray-500 mb-2">{category}</div>
          )}
          <p className="text-sm text-gray-600 line-clamp-2">{description}</p>
        </div>
      </div>
    </Link>
  );
};

export default DishCard;
