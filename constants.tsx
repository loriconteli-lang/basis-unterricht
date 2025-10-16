import React from 'react';
import type { WebApp, Feature } from './types';

// Custom Illustrations
const LessonObservationIllustration: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
    <defs>
      <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{stopColor: '#e0f2fe', stopOpacity: 1}} />
        <stop offset="100%" style={{stopColor: '#dbeafe', stopOpacity: 1}} />
      </linearGradient>
    </defs>
    <path d="M25,10 C22.79,10 21,11.79 21,14 L21,86 C21,88.21 22.79,90 25,90 L75,90 C77.21,90 79,88.21 79,86 L79,40 L55,10 L25,10 Z" fill="url(#grad1)" stroke="#9ca3af" strokeWidth="1.5"/>
    <path d="M55,10 L55,36 C55,38.21 56.79,40 59,40 L79,40" fill="none" stroke="#9ca3af" strokeWidth="1.5"/>
    <g transform="translate(30, 45)">
      <line x1="0" y1="5" x2="30" y2="5" stroke="#60a5fa" strokeWidth="2" strokeLinecap="round"/>
      <line x1="0" y1="15" x2="40" y2="15" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round"/>
      <line x1="0" y1="25" x2="25" y2="25" stroke="#60a5fa" strokeWidth="2" strokeLinecap="round"/>
    </g>
    <circle cx="68" cy="68" r="18" fill="#ffffff" stroke="#3b82f6" strokeWidth="1.5"/>
    <path d="M78 78 L85 85" stroke="#3b82f6" strokeWidth="2.5" strokeLinecap="round"/>
    <path d="M68,60 v8 h8" fill="none" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// Feature Icons Lesson Observation
const IconFileText: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
    </svg>
);
const IconDownload: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
    </svg>
);
const IconFolder: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z" />
    </svg>
);

export const WEB_APPS: WebApp[] = [
  { id: 'lesson-observation', url: 'https://basis-unterricht.base44.app', icon: LessonObservationIllustration },
];

const lessonObservationFeaturesDe: Feature[] = [
    { icon: IconFileText, title: 'Strukturierte Beobachtung', text: 'Erfassen Sie Beobachtungen systematisch und effizient anhand praxisorientierter Dimensionen.' },
    { icon: IconDownload, title: 'Automatisierte PDF-Berichte', text: 'Erstellen Sie mit einem Klick professionelle, detaillierte Berichte für Feedbackgespräche.' },
    { icon: IconFolder, title: 'Einfache Datenverwaltung', text: 'Organisieren Sie alle Beobachtungen sicher und übersichtlich in einer persönlichen Ordnerstruktur.' },
];

const lessonObservationFeaturesEn: Feature[] = [
    { icon: IconFileText, title: 'Structured Observation', text: 'Systematically and efficiently capture observations based on practice-oriented dimensions.' },
    { icon: IconDownload, title: 'Automated PDF Reports', text: 'Create professional, detailed reports for feedback discussions with a single click.' },
    { icon: IconFolder, title: 'Simple Data Management', text: 'Organize all observations securely and clearly in a personal folder structure.' },
];

export const TEXTS = {
  de: {
    dashboardTitle: 'Digitale Werkzeuge für eine effiziente Schulleitung',
    dashboardSubtitle: 'Optimieren Sie Ihre Prozesse und gewinnen Sie wertvolle Zeit für pädagogische Führung.',
    launchButton: 'Starten',
    appNames: {
      'lesson-observation': 'BASIS Unterricht: professionelle Unterrichsbeobachtungen',
    },
    appDescriptions: {
      'lesson-observation': lessonObservationFeaturesDe,
    },
  },
  en: {
    dashboardTitle: 'Digital Tools for Efficient School Management',
    dashboardSubtitle: 'Optimize your processes and gain valuable time for educational leadership.',
    launchButton: 'Launch',
    appNames: {
      'lesson-observation': 'BASIS Teaching: Professional Lesson Observations',
    },
    appDescriptions: {
      'lesson-observation': lessonObservationFeaturesEn,
    },
  },
};
