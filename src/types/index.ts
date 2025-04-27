
export interface City {
  id: string;
  name: string;
  state?: string;
  country?: string;
  slug: string;
  imageUrl: string;
  description: string;
  neighborhoods: Neighborhood[];
}

export interface Neighborhood {
  id: string;
  name: string;
  cityId: string;
  slug: string;
  imageUrl: string;
  description: string;
}

export interface Dish {
  id: string;
  name: string;
  slug: string;
  category: string;
  imageUrl: string;
  description: string;
  restaurants: Restaurant[];
}

export interface Restaurant {
  id: string;
  name: string;
  neighborhoodId: string;
  cityId: string;
  address: string;
  imageUrl: string;
  hours: {
    open: string;
    close: string;
  };
  dishes: RestaurantDish[];
}

export interface RestaurantDish {
  dishId: string;
  craveRank: number; // 1-5
  culinaryCred: number; // 1-5
  buzz: number; // 1-5
  priceRange: string; // $, $$, $$$, $$$$
  description: string;
  imageUrl: string;
  tags: string[];
}

export interface Review {
  id: string;
  dishId: string;
  restaurantId: string;
  userId: string;
  userName: string;
  userAvatar: string;
  rating: number;
  review: string;
  date: string;
}
