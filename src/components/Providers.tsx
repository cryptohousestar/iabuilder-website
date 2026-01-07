'use client';

import { useTranslations } from 'next-intl';

export function Providers() {
  const t = useTranslations('providers');

  const providers = [
    { key: 'google', color: 'bg-blue-100 text-blue-800' },
    { key: 'groq', color: 'bg-orange-100 text-orange-800' },
    { key: 'openrouter', color: 'bg-purple-100 text-purple-800' },
    { key: 'openai', color: 'bg-green-100 text-green-800' },
    { key: 'anthropic', color: 'bg-red-100 text-red-800' },
    { key: 'coming', color: 'bg-gray-100 text-gray-600' }
  ];

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t('title')}
          </h2>
          <p className="text-xl text-gray-600">
            {t('subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {providers.map((provider) => (
            <div key={provider.key} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <div className={`inline-block px-3 py-1 rounded-full text-sm font-medium mb-3 ${provider.color}`}>
                {t(`list.${provider.key}.name`)}
              </div>
              <p className="text-gray-600">
                {t(`list.${provider.key}.description`)}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 max-w-2xl mx-auto">
            <p className="text-blue-800 font-medium mb-2">💡 Professional Recommendation</p>
            <p className="text-blue-700 text-sm">
              {t('recommendation')}
            </p>
          </div>
          <p className="text-gray-600 mt-6">
            More providers coming soon. IABuilder is designed to work with any AI service.
          </p>
        </div>
      </div>
    </section>
  );
}