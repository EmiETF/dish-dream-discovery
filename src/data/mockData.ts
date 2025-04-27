
import { City, Dish, Restaurant, Review } from "../types";

export const cities: City[] = [
  {
    id: "1",
    name: "New York City",
    state: "NY",
    country: "USA",
    slug: "new-york-city",
    imageUrl: "/lovable-uploads/1c748a52-e161-4da3-be0f-b76d7795a864.png",
    description: "The Big Apple is known for its diverse food scene, from classic bagels to gourmet cuisine.",
    neighborhoods: [
      {
        id: "101",
        name: "Manhattan",
        cityId: "1",
        slug: "manhattan",
        imageUrl: "/lovable-uploads/1c748a52-e161-4da3-be0f-b76d7795a864.png",
        description: "The heart of NYC with countless iconic eateries and food establishments."
      },
      {
        id: "102",
        name: "Brooklyn",
        cityId: "1",
        slug: "brooklyn",
        imageUrl: "/lovable-uploads/fc42acf5-dd30-4b9c-b86b-39be70e8d158.png",
        description: "Home to some of the city's most innovative and trendy food spots."
      }
    ]
  },
  {
    id: "2",
    name: "Los Angeles",
    state: "CA",
    country: "USA",
    slug: "los-angeles",
    imageUrl: "/lovable-uploads/7ffa2e95-8986-4f2f-a921-aad6ebd72fd5.png",
    description: "LA offers a melting pot of cuisines from around the world, with emphasis on fresh ingredients.",
    neighborhoods: [
      {
        id: "201",
        name: "Little Tokyo",
        cityId: "2",
        slug: "little-tokyo",
        imageUrl: "/lovable-uploads/7ffa2e95-8986-4f2f-a921-aad6ebd72fd5.png",
        description: "A hub for authentic Japanese cuisine and cultural experiences."
      }
    ]
  },
  {
    id: "3",
    name: "San Francisco",
    state: "CA",
    country: "USA",
    slug: "san-francisco",
    imageUrl: "/lovable-uploads/6e084c17-0ee1-4e98-bcb4-f554e25c98d4.png",
    description: "Known for farm-to-table dining and innovative culinary approaches.",
    neighborhoods: []
  },
  {
    id: "4",
    name: "Chicago",
    state: "IL",
    country: "USA",
    slug: "chicago",
    imageUrl: "/lovable-uploads/fc42acf5-dd30-4b9c-b86b-39be70e8d158.png",
    description: "Famous for deep dish pizza, hot dogs, and a thriving fine dining scene.",
    neighborhoods: []
  },
  {
    id: "5",
    name: "Boston",
    state: "MA",
    country: "USA",
    slug: "boston",
    imageUrl: "/lovable-uploads/1c748a52-e161-4da3-be0f-b76d7795a864.png",
    description: "Historic city with excellent seafood and a mix of traditional and modern cuisine.",
    neighborhoods: []
  },
  {
    id: "6",
    name: "Austin",
    state: "TX",
    country: "USA",
    slug: "austin",
    imageUrl: "/lovable-uploads/7ffa2e95-8986-4f2f-a921-aad6ebd72fd5.png",
    description: "Known for its barbecue, food trucks, and innovative Tex-Mex cuisine.",
    neighborhoods: []
  }
];

export const dishes: Dish[] = [
  {
    id: "1",
    name: "Bagel",
    slug: "bagel",
    category: "Breakfast",
    imageUrl: "/lovable-uploads/96504c4c-1050-4c69-acf5-c6c84099bf52.png",
    description: "A ring-shaped bread roll that is boiled before baking, giving it a dense, chewy interior with a browned exterior.",
    restaurants: []
  },
  {
    id: "2",
    name: "Burger",
    slug: "burger",
    category: "American",
    imageUrl: "/lovable-uploads/6e084c17-0ee1-4e98-bcb4-f554e25c98d4.png",
    description: "A sandwich consisting of one or more cooked patties of ground meat, usually beef, placed inside a sliced bread roll or bun.",
    restaurants: []
  },
  {
    id: "3",
    name: "Pizza",
    slug: "pizza",
    category: "Italian",
    imageUrl: "/lovable-uploads/fc42acf5-dd30-4b9c-b86b-39be70e8d158.png",
    description: "A dish of Italian origin consisting of a flattened disk of bread dough topped with various ingredients including tomato sauce, cheese, and often various toppings.",
    restaurants: []
  },
  {
    id: "4",
    name: "Hot Pot",
    slug: "hot-pot",
    category: "Chinese",
    imageUrl: "/lovable-uploads/96504c4c-1050-4c69-acf5-c6c84099bf52.png",
    description: "A cooking method where raw ingredients are cooked tableside in a simmering pot of broth.",
    restaurants: []
  },
  {
    id: "5",
    name: "Dumplings",
    slug: "dumplings",
    category: "Chinese",
    imageUrl: "/lovable-uploads/6e084c17-0ee1-4e98-bcb4-f554e25c98d4.png",
    description: "Small pieces of dough wrapped around a filling, typically of meat or vegetables.",
    restaurants: []
  },
  {
    id: "6",
    name: "Lobster Rolls",
    slug: "lobster-rolls",
    category: "Seafood",
    imageUrl: "/lovable-uploads/96504c4c-1050-4c69-acf5-c6c84099bf52.png",
    description: "A sandwich native to New England, filled with lobster meat and typically served on a grilled hot dog bun.",
    restaurants: []
  },
  {
    id: "7",
    name: "Butter Chicken",
    slug: "butter-chicken",
    category: "Indian",
    imageUrl: "/lovable-uploads/fc42acf5-dd30-4b9c-b86b-39be70e8d158.png",
    description: "A curry of chicken in a spiced tomato, butter and cream sauce, originating from the Indian subcontinent.",
    restaurants: []
  },
  {
    id: "8",
    name: "Pastrami",
    slug: "pastrami",
    category: "Deli",
    imageUrl: "/lovable-uploads/96504c4c-1050-4c69-acf5-c6c84099bf52.png",
    description: "A Romanian-derived meat product made from beef that is brined, partially dried, seasoned with herbs and spices, then smoked and steamed.",
    restaurants: []
  },
  {
    id: "9",
    name: "Dimsum",
    slug: "dimsum",
    category: "Chinese",
    imageUrl: "/lovable-uploads/fc42acf5-dd30-4b9c-b86b-39be70e8d158.png",
    description: "A style of Chinese cuisine prepared as small bite-sized portions of food served in small steamer baskets or on small plates.",
    restaurants: []
  },
  {
    id: "10",
    name: "Peking Duck",
    slug: "peking-duck",
    category: "Chinese",
    imageUrl: "/lovable-uploads/6e084c17-0ee1-4e98-bcb4-f554e25c98d4.png",
    description: "A famous duck dish from Beijing that has been prepared since the imperial era. The meat is prized for its thin, crispy skin.",
    restaurants: []
  }
];

export const restaurants: Restaurant[] = [
  {
    id: "1",
    name: "Big Apple Bagels",
    neighborhoodId: "101", // Manhattan
    cityId: "1", // NYC
    address: "1 Water Street, Manhattan, NY",
    imageUrl: "/lovable-uploads/7ffa2e95-8986-4f2f-a921-aad6ebd72fd5.png",
    hours: {
      open: "7:00 AM",
      close: "5:00 PM"
    },
    dishes: [
      {
        dishId: "1", // Bagel
        craveRank: 5,
        culinaryCred: 5,
        buzz: 5,
        priceRange: "$$",
        description: "The classic New York bagel - chewy, dense, and perfect with cream cheese.",
        imageUrl: "/lovable-uploads/96504c4c-1050-4c69-acf5-c6c84099bf52.png",
        tags: ["fresh and hot", "doughy", "handroll"]
      },
      {
        dishId: "8", // Pastrami
        craveRank: 5,
        culinaryCred: 5,
        buzz: 5,
        priceRange: "$$",
        description: "Tender pastrami sliced thin and piled high on fresh bread.",
        imageUrl: "/lovable-uploads/96504c4c-1050-4c69-acf5-c6c84099bf52.png",
        tags: ["smoky", "tender", "flavorful"]
      }
    ]
  },
  {
    id: "2",
    name: "Anchor & James",
    neighborhoodId: "101", // Manhattan
    cityId: "1", // NYC
    address: "125 Park Avenue, Manhattan, NY",
    imageUrl: "/lovable-uploads/7ffa2e95-8986-4f2f-a921-aad6ebd72fd5.png",
    hours: {
      open: "11:00 AM",
      close: "10:00 PM"
    },
    dishes: [
      {
        dishId: "2", // Burger
        craveRank: 5,
        culinaryCred: 5,
        buzz: 5,
        priceRange: "$$",
        description: "A juicy burger with premium beef, topped with special sauce and aged cheddar.",
        imageUrl: "/lovable-uploads/6e084c17-0ee1-4e98-bcb4-f554e25c98d4.png",
        tags: ["juicy", "gourmet", "chef's special"]
      }
    ]
  }
];

export const reviews: Review[] = [
  {
    id: "1",
    dishId: "1", // Bagel
    restaurantId: "1", // Big Apple Bagels
    userId: "user1",
    userName: "Taylor S.",
    userAvatar: "/placeholder.svg",
    rating: 5,
    review: "This is amazing! I used some sheep's milk ricotta and a little goat's milk cheddar, both superb. Super easy with fairly simple clean-up too (I made this in a small 250 sq ft studio apartment kitchen).",
    date: "April 12, 2023"
  },
  {
    id: "2",
    dishId: "1", // Bagel
    restaurantId: "1", // Big Apple Bagels
    userId: "user2",
    userName: "Taylor S.",
    userAvatar: "/placeholder.svg",
    rating: 5,
    review: "This is amazing! I used some sheep's milk ricotta and a little goat's milk cheddar, both superb. Super easy with fairly simple clean-up too (I made this in a small 250 sq ft studio apartment kitchen).",
    date: "April 13, 2023"
  }
];

// Helper function to get popular dishes
export const getPopularDishes = () => {
  return dishes.slice(0, 3); // Return first 3 dishes as example
};

// Helper function to get restaurants by dish
export const getRestaurantsByDish = (dishId: string) => {
  return restaurants.filter(restaurant => 
    restaurant.dishes.some(dish => dish.dishId === dishId)
  );
};

// Helper function to get dish details
export const getDishDetails = (dishId: string) => {
  const dish = dishes.find(d => d.id === dishId);
  if (!dish) return null;
  
  const restaurantsWithDish = getRestaurantsByDish(dishId);
  return {
    ...dish,
    restaurants: restaurantsWithDish
  };
};

// Helper function to get reviews by dish
export const getReviewsByDish = (dishId: string) => {
  return reviews.filter(review => review.dishId === dishId);
};

// Helper function to get top cities 
export const getTopCities = () => {
  return cities.slice(0, 3); // Return first 3 cities as example
};

// Helper function to get city by slug
export const getCityBySlug = (slug: string) => {
  return cities.find(city => city.slug === slug);
};

// Helper function to get dishes by category
export const getDishesByCategory = (category: string) => {
  return dishes.filter(dish => dish.category === category);
};

// Helper function to get all dish categories
export const getAllDishCategories = () => {
  const categories = new Set(dishes.map(dish => dish.category));
  return Array.from(categories);
};

// Helper function to get dish by slug
export const getDishBySlug = (slug: string) => {
  return dishes.find(dish => dish.slug === slug);
};

// Helper function to get neighborhood by slug
export const getNeighborhoodBySlug = (citySlug: string, neighborhoodSlug: string) => {
  const city = getCityBySlug(citySlug);
  if (!city) return null;
  
  return city.neighborhoods.find(neighborhood => neighborhood.slug === neighborhoodSlug);
};
