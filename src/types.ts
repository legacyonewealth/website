export type PageId = 'home' | 'about' | 'solutions' | 'approach' | 'team' | 'contact';

export interface NavItem {
  id: PageId;
  label: string;
}

export interface SolutionCategory {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
  products: ProductItem[];
}

export interface ProductItem {
  id: string;
  name: string;
  tagline: string;
  description: string;
  suitability: string;
  keyAspects: string[];
  category: 'creation' | 'protection' | 'optimisation' | 'specialised';
}

export interface ApproachStep {
  stepNumber: string;
  title: string;
  headline: string;
  summary: string;
  details: string[];
  icon: string;
}

export interface ValueItem {
  title: string;
  description: string;
  icon: string;
}

export interface FounderProfile {
  id: string;
  name: string;
  designation: string;
  role: string;
  shortBio?: string;
  bio: string;
  background: string;
  expertise: string[];
  mumbaiHeritage: string;
  imageUrl?: string;
  linkedInUrl?: string;
  emailPlaceholder?: string;
}

export interface ContactFormData {
  name: string;
  mobile: string;
  email: string;
  city: string;
  profession: string;
  wealthRange: string;
  discussionTopics: string[];
  message: string;
  preferredContactMode: 'phone' | 'email' | 'whatsapp';
}
