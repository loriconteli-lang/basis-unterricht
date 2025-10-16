import React from 'react';
import { TEXTS } from '../constants';
import type { Language, WebApp, Feature } from '../types';

interface AppCardProps {
  app: WebApp;
  language: Language;
  onAppSelect: (app: WebApp) => void;
}

const AppCard: React.FC<AppCardProps> = ({ app, language, onAppSelect }) => {
  const texts = TEXTS[language];
  const appName = texts.appNames[app.id as keyof typeof texts.appNames];
  const appDescription = texts.appDescriptions[app.id as keyof typeof texts.appDescriptions];
  const AppIcon = app.icon;

  const renderDescription = () => {
    if (Array.isArray(appDescription)) {
      return (
        <ul className="space-y-4 text-left">
          {(appDescription as Feature[]).map((feature, index) => (
            <li key={index} className="flex items-start">
              <div className="flex-shrink-0 bg-red-100 dark:bg-red-900/40 rounded-lg p-2.5">
                <feature.icon className="h-5 w-5 text-red-500" />
              </div>
              <div className="ml-4 flex-1">
                <h4 className="font-bold text-slate-800 dark:text-slate-100 text-md">
                  {feature.title}
                </h4>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                  {feature.text}
                </p>
              </div>
            </li>
          ))}
        </ul>
      );
    }
    return (
      <p className="text-slate-600 dark:text-slate-300 text-base leading-relaxed">
        {appDescription}
      </p>
    );
  };

  return (
    <div className="bg-white/60 dark:bg-slate-800/60 backdrop-blur-lg rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out transform hover:-translate-y-2 flex flex-col overflow-hidden border border-slate-200/50 dark:border-slate-700/50 h-full">
      <div className="p-6 flex justify-center items-center h-40 bg-blue-50 dark:bg-blue-900/30">
        <div className="w-28 h-28 rounded-full flex items-center justify-center bg-blue-100 dark:bg-blue-900/50">
            <AppIcon className="w-20 h-20" />
        </div>
      </div>
      <div className="p-6 flex-grow flex flex-col text-center">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
          {appName}
        </h3>
        <div className="flex-grow">
          {renderDescription()}
        </div>
        
        <div className='mt-8'>
          <button
            onClick={() => onAppSelect(app)}
            className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-semibold rounded-lg shadow-sm text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-50 dark:focus:ring-offset-slate-900 transition-all transform hover:scale-105 bg-blue-600 hover:bg-blue-700 focus:ring-blue-500"
          >
            {texts.launchButton}
            <svg className="ml-2 -mr-1 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AppCard;
