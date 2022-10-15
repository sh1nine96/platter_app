export default interface IRestaurants {
  id: number;
  name: string;
  description: string;
  cuisines: string[];
  opens: string;
  closes: string;
  rating: number;
  numRatings: number;
  costForTwo: number;
  imageUrl: string;
}
