/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
  aspectRatio: 'portrait' | 'landscape' | 'square';
  dimensions: string;
  year: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  price: string;
  duration: string;
  description: string;
  deliverables: string[];
}

export interface ContactFormData {
  name: string;
  email: string;
  service: string;
  message: string;
}
