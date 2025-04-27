
import React from 'react';
import { Flame, ChefHat } from 'lucide-react';

interface PillRatingProps {
  label: string;
  rating: number;
  type: 'buzz' | 'culinary';
}

const PillRating = ({ label, rating, type }: PillRatingProps) => {
  const Icon = type === 'buzz' ? Flame : ChefHat;
  const max = 5;
  
  return (
    <div className="flex items-center gap-2">
      <span className="text-gray-600 min-w-20">{label}:</span>
      <div className="bg-gray-100 rounded-full px-3 py-1 inline-flex items-center gap-1">
        {[...Array(max)].map((_, index) => (
          <Icon
            key={index}
            size={16}
            className={index < rating ? 'text-primary' : 'text-gray-300'}
          />
        ))}
      </div>
    </div>
  );
};

export default PillRating;

