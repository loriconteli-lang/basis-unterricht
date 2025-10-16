import React from 'react';
import type { WebApp } from '../types';

interface AppViewProps {
  app: WebApp;
}

const AppView: React.FC<AppViewProps> = ({ app }) => {
  return (
    // The header has a height of 16 in Tailwind units, which is 4rem.
    // This calculation ensures the iframe fills the remaining vertical space.
    <div className="w-full h-[calc(100vh-4rem)]">
      <iframe
        src={app.url}
        title={app.id}
        className="w-full h-full border-0"
        allow="camera; microphone; geolocation; fullscreen;"
      />
    </div>
  );
};

export default AppView;
