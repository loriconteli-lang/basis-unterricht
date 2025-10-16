import React, { useState } from 'react';
import type { Language, WebApp } from './types';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import AppView from './components/AppView';
import PrivacyPolicyModal from './components/PrivacyPolicyModal';
import { TEXTS } from './constants';

const App: React.FC = () => {
  const [language, setLanguage] = useState<Language>('de');
  const [activeApp, setActiveApp] = useState<WebApp | null>(null);
  const [isPrivacyModalOpen, setIsPrivacyModalOpen] = useState(false);

  return (
    <div className="min-h-screen font-sans text-slate-800 dark:text-slate-200 bg-slate-50 dark:bg-slate-900">
      <div className="absolute inset-0 -z-0 h-full w-full bg-white dark:bg-slate-900 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] dark:bg-[radial-gradient(#334155_1px,transparent_1px)] [background-size:24px_24px]"></div>
      <div className="relative z-10 flex flex-col min-h-screen">
        <Header 
          language={language} 
          setLanguage={setLanguage} 
          activeApp={activeApp} 
          onBack={() => setActiveApp(null)} 
        />
        <main className="flex-grow">
          {activeApp ? (
            <AppView app={activeApp} />
          ) : (
            <Dashboard language={language} onAppSelect={setActiveApp} />
          )}
        </main>
        {!activeApp && (
          <footer className="text-center py-6 px-4">
            <button
              onClick={() => setIsPrivacyModalOpen(true)}
              className="text-sm text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              aria-label="Open Privacy Policy"
            >
              {TEXTS[language].privacyLink}
            </button>
          </footer>
        )}
      </div>
      <PrivacyPolicyModal 
        isOpen={isPrivacyModalOpen} 
        onClose={() => setIsPrivacyModalOpen(false)} 
        language={language}
      />
    </div>
  );
};

export default App;
