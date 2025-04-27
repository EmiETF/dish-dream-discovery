
import React from 'react';
import { Link } from 'react-router-dom';

interface CityCardProps {
  id: string;
  name: string;
  state?: string;
  slug: string;
  imageUrl: string;
  description: string;
}

const CityCard = ({ id, name, state, slug, imageUrl, description }: CityCardProps) => {
  return (
    <Link to={`/cities/${slug}`} className="block">
      <div className="border border-gray-200 rounded-lg overflow-hidden h-full transition-transform hover:shadow-md">
        <div className="aspect-video overflow-hidden">
          <img 
            src={imageUrl} 
            alt={name} 
            className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold mb-1">{name}{state && `, ${state}`}</h3>
          <p className="text-sm text-gray-600 line-clamp-2">{description}</p>
        </div>
      </div>
    </Link>
  );
};

export default CityCard;
