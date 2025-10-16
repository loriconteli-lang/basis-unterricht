import React from 'react';
import { WEB_APPS, TEXTS } from '../constants';
import type { Language, WebApp } from '../types';
import AppCard from './AppCard';

interface DashboardProps {
  language: Language;
  onAppSelect: (app: WebApp) => void;
}

const Dashboard: React.FC<DashboardProps> = ({ language, onAppSelect }) => {
  const texts = TEXTS[language];

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
          <span className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
            {texts.dashboardTitle}
          </span>
        </h1>
        <p className="mt-4 text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
          {texts.dashboardSubtitle}
        </p>
      </div>
      <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-8 lg:gap-10">
        {WEB_APPS.map((app) => (
          <div key={app.id} className="w-full max-w-lg sm:w-[calc(50%-1rem)] lg:w-[calc(50%-1.25rem)]">
             <AppCard app={app} language={language} onAppSelect={onAppSelect} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
