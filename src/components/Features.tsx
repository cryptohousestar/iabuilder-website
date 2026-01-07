'use client';

import { useTranslations } from 'next-intl';

export function Features() {
  const t = useTranslations('features');

  const features = [
    {
      key: 'terminal',
      icon: '💻'
    },
    {
      key: 'providers',
      icon: '🔗'
    },
    {
      key: 'tools',
      icon: '🛠️'
    },
    {
      key: 'context',
      icon: '🧠'
    }
  ];

  return (
    <section id="features" className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t('title')}
          </h2>
          <p className="text-xl text-gray-600">
            {t('subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div key={feature.key} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {t(`items.${feature.key}.title`)}
              </h3>
              <p className="text-gray-600">
                {t(`items.${feature.key}.description`)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}