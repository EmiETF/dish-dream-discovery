
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import RatingDisplay from '../components/RatingDisplay';
import { MapPin, Clock, ChevronLeft, ChevronRight } from 'lucide-react';
import { getDishBySlug, restaurants, getReviewsByDish } from '../data/mockData';

const SingleDishDetail = () => {
  const { slug, restaurantId } = useParams<{ slug: string; restaurantId: string }>();
  
  // Get dish details
  const dish = getDishBySlug(slug || '');
  
  // Get restaurant details
  const restaurant = restaurants.find(r => r.id === restaurantId);
  
  // Get dish info from restaurant
  const dishInfo = restaurant?.dishes.find(d => d.dishId === dish?.id);
  
  // Get reviews
  const reviews = getReviewsByDish(dish?.id || '');
  
  if (!dish || !restaurant || !dishInfo) {
    return <div>Dish or restaurant not found</div>;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="bg-primary text-white py-8 px-4">
        <div className="container mx-auto">
          <div className="text-sm mb-3">
            <Link to="/" className="text-white hover:underline">Home</Link>
            <span className="mx-2">›</span>
            <Link to={`/dishes/${dish.slug}`} className="text-white hover:underline">{dish.name}</Link>
            <span className="mx-2">›</span>
            <Link to={`/dishes/${dish.slug}/${restaurant.id}`} className="text-white hover:underline">Big Apple Bagel</Link>
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold">Big Apple Bagel</h1>
          
          <div className="flex items-center mt-2">
            <RatingDisplay rating={4.4} />
            <span className="ml-2 text-sm">
              (1.5k reviews)
            </span>
            <span className="mx-3">•</span>
            <span className="text-sm">$20 - 30</span>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-8">
        {/* Main content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left column - Main dish image */}
          <div className="col-span-2">
            <div className="relative rounded-lg overflow-hidden">
              <img 
                src={dishInfo.imageUrl} 
                alt={dish.name} 
                className="w-full h-80 object-cover"
              />
              <div className="absolute top-4 left-4 bg-white text-primary px-3 py-1 rounded-full">
                {dish.name}
              </div>
              <button className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md">
                <ChevronLeft size={24} />
              </button>
              <button className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md">
                <ChevronRight size={24} />
              </button>
            </div>
            
            {/* Dish description and reviews */}
            <div className="mt-8">
              <h2 className="text-2xl font-bold mb-4">What people say about the bagel</h2>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {dishInfo.tags.map((tag, index) => (
                  <span key={index} className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                    {tag}
                  </span>
                ))}
              </div>
              
              <p className="text-gray-700 mb-6">
                The bagel garners acclaim for its professional and attentive service, though the experience can sometimes feel hurried and impersonal, as some guests have pointed out. Patrons often appreciate the elegant and cozy atmosphere, enhanced by live music, although opinions differ with others finding the setting overcrowded.
              </p>
              
              <div className="mt-8">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-2xl font-bold">Other best dishes</h2>
                  <Link to="#" className="text-blue-600 hover:underline">See full menu</Link>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {[1, 2, 3].map((item) => (
                    <div key={item} className="border border-gray-200 rounded-lg overflow-hidden">
                      <img 
                        src={dishInfo.imageUrl} 
                        alt="Pastrami" 
                        className="w-full h-48 object-cover"
                      />
                      <div className="p-4">
                        <h3 className="font-bold mb-2">Pastrami</h3>
                        <div className="mb-1">
                          <div className="text-sm">Crave rank: <span className="text-yellow-500">★★★★★</span></div>
                        </div>
                        <div className="flex gap-2">
                          <span className="text-xs px-2 py-1 bg-blue-100 text-blue-800 rounded-full">Buzz ★★★★★</span>
                          <span className="text-xs px-2 py-1 bg-green-100 text-green-800 rounded-full">Culinary cred ★★★★★</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="mt-8">
                <h2 className="text-2xl font-bold mb-4">Restaurant overview</h2>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">
                    Value
                  </span>
                  <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">
                    Moderate noise
                  </span>
                  <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">
                    Kids-friendly
                  </span>
                </div>
                
                <p className="text-gray-700 mb-6">
                  The River Cafe garners acclaim for its professional and attentive service, though the experience can sometimes feel hurried and impersonal, as some guests have pointed out. Patrons often appreciate the elegant and cozy atmosphere, enhanced by live music, although opinions differ with others finding the setting overcrowded.
                </p>
                
                <div className="mb-6">
                  <h3 className="font-bold mb-2">Location</h3>
                  <div className="flex items-start">
                    <MapPin className="mr-2 mt-1" size={18} />
                    <div>
                      <p>1 Water street, Manhattan, NY</p>
                      <p className="text-gray-500">East Village</p>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-bold mb-2">Hours</h3>
                  <div className="flex items-center">
                    <Clock className="mr-2" size={18} />
                    <div className="flex gap-2">
                      <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">
                        Open now
                      </span>
                      <span>•</span>
                      <span>Closes at 5PM</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-8" id="reviews">
                <h2 className="text-2xl font-bold mb-4">Reviews</h2>
                
                {reviews.map((review) => (
                  <div key={review.id} className="border-t border-gray-200 py-6">
                    <div className="flex items-center mb-2">
                      <img 
                        src={review.userAvatar} 
                        alt={review.userName} 
                        className="w-10 h-10 rounded-full mr-3"
                      />
                      <div>
                        <div className="font-medium">{review.userName}</div>
                        <div className="text-gray-500 text-sm">{review.date}</div>
                      </div>
                    </div>
                    <p className="text-gray-700">{review.review}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Right column - Additional info */}
          <div className="space-y-4">
            <div className="bg-gray-100 rounded-lg overflow-hidden">
              <img 
                src="/lovable-uploads/7ffa2e95-8986-4f2f-a921-aad6ebd72fd5.png" 
                alt="Other dishes" 
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-bold mb-2">Other dishes</h3>
              </div>
            </div>
            
            <div className="bg-gray-100 rounded-lg overflow-hidden">
              <img 
                src="/lovable-uploads/7ffa2e95-8986-4f2f-a921-aad6ebd72fd5.png" 
                alt="Restaurant" 
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-bold mb-2">Restaurant</h3>
              </div>
            </div>
            
            <div className="bg-gray-100 rounded-lg overflow-hidden">
              <img 
                src="/lovable-uploads/7ffa2e95-8986-4f2f-a921-aad6ebd72fd5.png" 
                alt="Menu" 
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-bold mb-2">Menu</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default SingleDishDetail;
