export interface HotelInfo {
  name: string;
  brand: string;
  fullName: string;
  address: {
    line1: string;
    locality: string;
    city: string;
    state: string;
    country: string;
    postalCode: string;
    full: string;
  };
  contact: {
    phone: string;
    phoneDisplay: string;
    whatsapp: string;
    whatsappDisplay: string;
    email: string;
    isVerifiedPhone: boolean;
    isVerifiedEmail: boolean;
  };
  checkIn: string;
  checkOut: string;
  starRating: number;
  googleRating: number;
  reviewCount: number;
  urls: {
    googleHotels: string;
    googleMapsDirections: string;
    googleMapsEmbed: string;
    stayPatternListing: string;
    agodaListing: string;
    makeMyTripListing: string;
    goibiboListing: string;
  };
  social: {
    instagram?: string;
    facebook?: string;
  };
  taglines: {
    eyebrow: string;
    heroHeading: string;
    heroSubtitle: string;
    aboutEyebrow: string;
    aboutHeading: string;
    ctaHeading: string;
    ctaSubtitle: string;
  };
}

export const HOTEL_INFO: HotelInfo = {
  name: 'The Aurum',
  brand: 'The Aurum Luxury Collection',
  fullName: 'The Aurum Luxury Collection by Stay Pattern',
  address: {
    line1: '23A, Brein Hills',
    locality: 'Astanpora',
    city: 'Srinagar',
    state: 'Jammu and Kashmir',
    country: 'India',
    postalCode: '191121',
    full: '23A, Brein Hills, Astanpora, Srinagar, Jammu and Kashmir, India – 191121',
  },
  contact: {
    // Kept in centralized configuration fields until directly verified by property management
    phone: '+919419000000',
    phoneDisplay: '+91 (0) 9419 000000',
    whatsapp: '919419000000',
    whatsappDisplay: '+91 94190 00000',
    email: 'reservations@staypattern.com',
    isVerifiedPhone: false,
    isVerifiedEmail: false,
  },
  checkIn: '2:00 PM',
  checkOut: '12:00 PM',
  starRating: 4,
  googleRating: 4.8,
  reviewCount: 32,
  urls: {
    googleHotels: 'https://www.google.com/travel/hotels/aurum%20hotel%20kashmir/entity/CgsIq8To15G55ZKZARAB/overview',
    googleMapsDirections: 'https://www.google.com/maps/place/The+Aurum+Luxury+Collection+by+Stay+Pattern/@34.0941256,74.9030474,721m/data=!3m1!1e3!4m9!3m8!1s0x38e1895deacf8ed9:0x992595c91afa222b!5m2!4m1!1i2!8m2!3d34.0941256!4d74.9056223!16s%2Fg%2F11zbj28g6x?hl=en&entry=ttu',
    googleMapsEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3304.4217743912644!2d74.9030474!3d34.0941256!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38e1895deacf8ed9%3A0x992595c91afa222b!2sThe%20Aurum%20Luxury%20Collection%20by%20Stay%20Pattern!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin',
    stayPatternListing: 'https://www.staypattern.com/hotels/hg-127630',
    agodaListing: 'https://www.agoda.com/the-aurum-luxury-collection-by-stay-pattern/hotel/srinagar-in.html',
    makeMyTripListing: 'https://www.makemytrip.com/hotels/the_aurum_luxury_collection_by_stay_pattern-details-srinagar.html',
    goibiboListing: 'https://www.goibibo.com/hotels/the-aurum-luxury-collection-by-stay-pattern-hotel-in-srinagar-202604151616547903/',
  },
  social: {
    // Kept empty until verified per prompt guidelines
  },
  taglines: {
    eyebrow: 'WELCOME TO THE AURUM LUXURY COLLECTION',
    heroHeading: 'Experience the Art of Luxury in Kashmir',
    heroSubtitle: 'Discover an exceptional stay surrounded by the timeless beauty of Kashmir. Experience refined accommodation, beautiful views and warm hospitality at The Aurum Luxury Collection.',
    aboutEyebrow: 'About the Hotel',
    aboutHeading: 'A Refined Escape in the Heart of Kashmir',
    ctaHeading: 'Your Kashmir Escape Begins Here',
    ctaSubtitle: 'Discover comfort, hospitality and the beauty of Srinagar at The Aurum Luxury Collection.',
  },
};
