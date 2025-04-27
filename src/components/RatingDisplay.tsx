
import React from 'react';
import { Star, StarHalf } from 'lucide-react';

interface RatingDisplayProps {
  rating: number;
  maxRating?: number;
  color?: string;
  size?: number;
}

const RatingDisplay = ({ 
  rating, 
  maxRating = 5, 
  color = '#F7941D',
  size = 16
}: RatingDisplayProps) => {
  // Create array to represent the stars
  const stars = [];
  
  // Fill the array with whole and half stars
  for (let i = 1; i <= maxRating; i++) {
    if (i <= rating) {
      // Full star
      stars.push(
        <Star key={i} size={size} fill={color} color={color} />
      );
    } else if (i - 0.5 <= rating) {
      // Half star
      stars.push(
        <StarHalf key={i} size={size} fill={color} color={color} />
      );
    } else {
      // Empty star
      stars.push(
        <Star key={i} size={size} color={color} />
      );
    }
  }
  
  return <div className="flex">{stars}</div>;
};

export default RatingDisplay;
