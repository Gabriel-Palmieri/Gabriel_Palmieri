'use client';

import { useLanguage } from '../contexts/LanguageContext';

export function DebugLanguage() {
  const { t, language, setLanguage } = useLanguage();

  return (
    <div className="fixed bottom-4 right-4 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg">
      <p>Current Language: {language}</p>
      <pre className="mt-2 text-sm">
        {JSON.stringify(t('about'), null, 2)}
      </pre>
      <div className="mt-4 flex gap-2">
        <button
          onClick={() => setLanguage('pt')}
          className="px-3 py-1 bg-blue-500 text-white rounded"
        >
          PT
        </button>
        <button
          onClick={() => setLanguage('en')}
          className="px-3 py-1 bg-blue-500 text-white rounded"
        >
          EN
        </button>
      </div>
    </div>
  );
} 