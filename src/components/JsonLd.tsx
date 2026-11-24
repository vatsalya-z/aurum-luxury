import React from 'react';
import {
  generateHotelSchema,
  generateWebSiteSchema,
  generateOrganizationSchema,
  generateBreadcrumbSchema,
  generateFAQSchema,
  generateRoomSchema,
} from '@/lib/seo/schema';
import { Room } from '@/data/rooms';

interface JsonLdProps {
  type: 'Hotel' | 'BreadcrumbList' | 'FAQPage' | 'WebSite' | 'Organization' | 'Room' | 'Custom';
  data?: any;
}

export default function JsonLd({ type, data }: JsonLdProps) {
  let schema: any = null;

  switch (type) {
    case 'Hotel':
      schema = generateHotelSchema();
      break;
    case 'WebSite':
      schema = generateWebSiteSchema();
      break;
    case 'Organization':
      schema = generateOrganizationSchema();
      break;
    case 'BreadcrumbList':
      schema = generateBreadcrumbSchema(data || []);
      break;
    case 'FAQPage':
      schema = generateFAQSchema(data || []);
      break;
    case 'Room':
      schema = generateRoomSchema(data as Room);
      break;
    case 'Custom':
      schema = data;
      break;
    default:
      schema = null;
  }

  if (!schema) return null;

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
