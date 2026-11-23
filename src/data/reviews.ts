export interface VerifiedReview {
  id: string;
  author: string;
  rating: number;
  date: string;
  text: string;
  verifiedStay: boolean;
  source: 'Google' | 'MakeMyTrip' | 'StayPattern';
}

export interface ReviewsData {
  platform: string;
  rating: number;
  scale: number;
  totalReviews: number;
  reviewSnippet: string;
  googleReviewUrl: string;
  writeReviewUrl: string;
  verifiedReviews: VerifiedReview[];
}

export const REVIEWS_DATA: ReviewsData = {
  platform: 'Google Reviews',
  rating: 4.8,
  scale: 5,
  totalReviews: 32,
  reviewSnippet: 'Exceptional hospitality and serene Dal Lake vistas rated 4.8 out of 5 by verified guests on Google.',
  googleReviewUrl: 'https://www.google.com/travel/hotels/aurum%20hotel%20kashmir/entity/CgsIq8To15G55ZKZARAB/reviews',
  writeReviewUrl: 'https://www.google.com/travel/hotels/aurum%20hotel%20kashmir/entity/CgsIq8To15G55ZKZARAB/overview',
  verifiedReviews: [],
};
