import React, { useState } from 'react';
import type { Language, WebApp } from './types';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import AppView from './components/AppView';

const App: React.FC = () => {
  const [language, setLanguage] = useState<Language>('de');
  const [activeApp, setActiveApp] = useState<WebApp | null>(null);

  return (
    <div className="min-h-screen font-sans text-slate-800 dark:text-slate-200 bg-slate-50 dark:bg-slate-900">
      <div className="absolute inset-0 -z-0 h-full w-full bg-white dark:bg-slate-900 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] dark:bg-[radial-gradient(#334155_1px,transparent_1px)] [background-size:24px_24px]"></div>
      <div className="relative z-10">
        <Header 
          language={language} 
          setLanguage={setLanguage} 
          activeApp={activeApp} 
          onBack={() => setActiveApp(null)} 
        />
        <main>
          {activeApp ? (
            <AppView app={activeApp} />
          ) : (
            <Dashboard language={language} onAppSelect={setActiveApp} />
          )}
        </main>
      </div>
    </div>
  );
};

export default App;
