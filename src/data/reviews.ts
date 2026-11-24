export type Review = {
  name: string;
  date: string;       // month + year of stay
  tripType: string;
  rating: 5;
  title: string;
  text: string;
};

export interface VerifiedReview {
  id: string;
  author: string;
  title?: string;
  rating: number; // 1 to 5
  date?: string;
  stayDate?: string;
  text: string;
  verifiedStay?: boolean;
  source: 'Tripadvisor' | 'Google' | 'MakeMyTrip' | 'StayPattern';
  reviewUrl?: string;
}

export interface ReviewsData {
  platform: string;
  rating: number;
  scale: number;
  totalReviews: number;
  reviewSnippet: string;
  googleReviewUrl: string;
  tripadvisorUrl: string;
  writeReviewUrl: string;
  verifiedReviews: VerifiedReview[];
}

export const TRIPADVISOR_REVIEWS: Review[] = [
  {
    name: "Nakshatra A",
    date: "July 2026",
    tripType: "Family",
    rating: 5,
    title: "Some places give you a room to stay. Rare places give you memories that stay forever.",
    text: "Guests loved the brand-new, beautifully maintained property, the Himalayan, valley and Dal Lake views from the balcony, and the sunsets. They praised the home-style food (poha, chole puri, masala omelette) that the team happily customised, the warm hospitality, and the special care given to elderly parents, with a special mention of Bilal Bhai. 'True luxury is how a place makes you feel.'"
  },
  {
    name: "Himanshu B",
    date: "September 2026",
    tripType: "Couple",
    rating: 5,
    title: "Amazing property",
    text: "We had wonderful stay here. Location is perfect. Property has amazing dal lake view on one side and is surrounded by mountains on the other 3 sides. the staff is very helpful and polite. Mr Bilal took great care of us."
  },
  {
    name: "Ramesh J",
    date: "November 2026",
    tripType: "Family",
    rating: 5,
    title: "Excellent service",
    text: "Great staff and excellent service. Food is really good and room cleaning services are great. Resort is just as shown as in pictures. They all are very responsive."
  },
  {
    name: "Gazal J",
    date: "November 2026",
    tripType: "Family",
    rating: 5,
    title: "Great service",
    text: "Exactly how it looks in the photos and videos, food is great, service is great."
  },
  {
    name: "Devika M",
    date: "November 2026",
    tripType: "Couple",
    rating: 5,
    title: "Best stay in Kashmir",
    text: "Excellent and comfortable stay with great ambience, tasty and delicious food, above all amazing service by front office team and Mr Bilal."
  },
  {
    name: "Mahamadmalik B",
    date: "November 2026",
    tripType: "Couple",
    rating: 5,
    title: "Best stay in Srinagar",
    text: "Everything wow… stay, view, hospitality all check. Thanks to Bilaal sir for providing exceptional service."
  },
  {
    name: "Gurbir S",
    date: "October 2026",
    tripType: "Couple",
    rating: 5,
    title: "Cozy stay",
    text: "Loved the stay. Bilan F&B was really sweet and helpful."
  },
  {
    name: "Fearless34385515017",
    date: "October 2026",
    tripType: "Family",
    rating: 5,
    title: "Excellent",
    text: "Food and service was excellent. Bilal (F&B), Chef Saif. Good quality!"
  },
  {
    name: "Raghav G",
    date: "October 2026",
    tripType: "Family",
    rating: 5,
    title: "Family Stay at Aurum Luxury",
    text: "Had an amazing experience with first class hospitality. Chef Saif and team member Bilal made the stay very comfortable and stress free. 10/10 recommended."
  },
  {
    name: "Aanya A",
    date: "June 2026",
    tripType: "Family",
    rating: 5,
    title: "Aurum luxury",
    text: "Amazing view, great sense of privacy, the most beautiful property ever, the best food. Bilal from food service, Zesheen, Nadeem and Sahil have made our stay truly amazing and homely, the service is impeccable."
  },
  {
    name: "Lavish K",
    date: "June 2026",
    tripType: "Family",
    rating: 5,
    title: "Best experience ever",
    text: "The location is best which we have dreamed about: river, mountain and hut house. Staff was great and helped us however they could."
  }
];

export const TRIPADVISOR_SUMMARY = {
  overallRating: 5.0,
  scale: 5,
  totalReviews: 11,
  rank: "#47 of 336 B&Bs / Inns in Srinagar",
  sourceUrl: "https://www.tripadvisor.com/Hotel_Review-g297623-d34391477-Reviews-Aurum_Luxury_Collection_by_Stay_Pattern-Srinagar_Srinagar_District_Kashmir_Jammu_and_.html",
  categoryScores: [
    { name: "Rooms", score: 5.0, percentage: 100 },
    { name: "Service", score: 5.0, percentage: 100 },
    { name: "Value", score: 5.0, percentage: 100 },
    { name: "Cleanliness", score: 5.0, percentage: 100 },
    { name: "Location", score: 5.0, percentage: 100 },
    { name: "Sleep Quality", score: 5.0, percentage: 100 },
  ],
  popularMentions: [
    "Delicious food",
    "Mountains",
    "Hospitality",
    "Location",
    "Property",
    "Kashmir",
    "Staff (Mr. Bilal)"
  ],
};

export const REVIEWS_DATA: ReviewsData = {
  platform: 'Tripadvisor & Google Reviews',
  rating: 5.0,
  scale: 5,
  totalReviews: 11,
  reviewSnippet: 'Rated 5.0 out of 5 by verified guests on Tripadvisor with perfect 5-star ratings across all categories.',
  googleReviewUrl: 'https://www.google.com/travel/hotels/aurum%20hotel%20kashmir/entity/CgsIq8To15G55ZKZARAB/reviews',
  tripadvisorUrl: 'https://www.tripadvisor.com/Hotel_Review-g297623-d34391477-Reviews-Aurum_Luxury_Collection_by_Stay_Pattern-Srinagar_Srinagar_District_Kashmir_Jammu_and_.html',
  writeReviewUrl: 'https://www.tripadvisor.com/Hotel_Review-g297623-d34391477-Reviews-Aurum_Luxury_Collection_by_Stay_Pattern-Srinagar_Srinagar_District_Kashmir_Jammu_and_.html',
  verifiedReviews: [],
};
