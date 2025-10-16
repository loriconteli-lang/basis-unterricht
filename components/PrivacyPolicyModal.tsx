import React from 'react';
import { TEXTS } from '../constants';
import type { Language } from '../types';

interface PrivacyPolicyModalProps {
  isOpen: boolean;
  onClose: () => void;
  language: Language;
}

const PrivacyPolicyModal: React.FC<PrivacyPolicyModalProps> = ({ isOpen, onClose, language }) => {
  if (!isOpen) return null;

  const texts = TEXTS[language];

  const renderContent = () => {
    if (language === 'en') {
        return <p>{texts.privacyContent}</p>;
    }

    const contentWithLinks = texts.privacyContent
        .replace(/📧 E-Mail: lori@conte\.li/g, '📧 E-Mail: <a href="mailto:lori@conte.li" class="text-blue-600 dark:text-blue-400 hover:underline">lori@conte.li</a>')
        .replace(/(?<!E-Mail: )lori@conte\.li/g, '<a href="mailto:lori@conte.li" class="text-blue-600 dark:text-blue-400 hover:underline">lori@conte.li</a>');

    const paragraphs = contentWithLinks.split('\n\n');

    return paragraphs.map((p, index) => {
        const firstLine = p.split('\n')[0];
        if (firstLine.startsWith('Stand:')) {
            return <p key={index} className="text-sm text-slate-500 dark:text-slate-400 mb-6" dangerouslySetInnerHTML={{__html: p}}/>
        }
        if (/^\d+\. /.test(firstLine)) {
            const title = firstLine;
            const body = p.substring(title.length).trim().replace(/\n/g, '<br />');
            return (
                <div key={index}>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 mt-6 mb-2">{title}</h3>
                    <div className="text-slate-600 dark:text-slate-300 space-y-2" dangerouslySetInnerHTML={{__html: body}} />
                </div>
            );
        }
        return <p key={index} className="mb-4 text-slate-600 dark:text-slate-300" dangerouslySetInnerHTML={{__html: p.replace(/\n/g, '<br />')}} />;
    });
  };

  return (
    <div 
      className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex justify-center items-center p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="privacy-policy-title"
    >
      <div 
        className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl max-w-3xl w-full max-h-[90vh] flex flex-col"
        onClick={e => e.stopPropagation()}
      >
        <header className="p-4 sm:p-6 border-b border-slate-200 dark:border-slate-700 flex justify-between items-center flex-shrink-0">
          <h2 id="privacy-policy-title" className="text-xl font-bold text-slate-800 dark:text-slate-100">{texts.privacyTitle}</h2>
          <button
            onClick={onClose}
            className="text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-200 transition-colors rounded-full p-1 -mr-2"
            aria-label="Close privacy policy"
          >
            <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </header>
        <main className="p-4 sm:p-6 overflow-y-auto">
          <div className="prose prose-slate dark:prose-invert max-w-none">
            {renderContent()}
          </div>
        </main>
      </div>
    </div>
  );
};

export default PrivacyPolicyModal;
