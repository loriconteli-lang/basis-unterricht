import React from 'react';
import type { Language, WebApp } from '../types';

interface HeaderProps {
  language: Language;
  setLanguage: (language: Language) => void;
  activeApp: WebApp | null;
  onBack: () => void;
}

const Header: React.FC<HeaderProps> = ({ language, setLanguage, activeApp, onBack }) => {
  const LanguageButton: React.FC<{ lang: Language }> = ({ lang }) => {
    const isActive = language === lang;
    return (
      <button
        onClick={() => setLanguage(lang)}
        className={`px-3 py-1 text-sm font-semibold rounded-md transition-colors ${
          isActive
            ? 'bg-blue-600 text-white'
            : 'text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
        }`}
      >
        {lang.toUpperCase()}
      </button>
    );
  };

  const BackButton: React.FC = () => (
    <button
      onClick={onBack}
      className="flex items-center text-sm font-semibold text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-md px-3 py-2 transition-colors"
      aria-label="Back to dashboard"
    >
      <svg className="w-5 h-5 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
      </svg>
      Dashboard
    </button>
  );

  return (
    <header className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm shadow-sm sticky top-0 z-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            {activeApp ? (
              <BackButton />
            ) : (
              <div className="flex items-center">
                <svg className="h-8 w-8 text-blue-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10A10 10 0 0012 2z" fill="currentColor" fillOpacity="0.1"/>
                  <path d="M8 14s1.5-2 4-2 4 2 4 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  <path d="M9 10h.01M15 10h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M11 6l-1 2h6l-1-2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span className="ml-3 text-2xl font-bold text-slate-800 dark:text-white">
                  eduLead
                </span>
              </div>
            )}
          </div>
          <div className="flex items-center space-x-2 bg-slate-100 dark:bg-slate-700 p-1 rounded-lg">
            <LanguageButton lang="de" />
            <LanguageButton lang="en" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
