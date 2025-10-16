import type React from 'react';

export type Language = 'de' | 'en';

export interface Feature {
  title?: string;
  text: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
}

export interface WebApp {
  id: string;
  url: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
}