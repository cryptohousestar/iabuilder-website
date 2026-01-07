'use client';

import { useTranslations } from 'next-intl';

export function WhyLocal() {
  const t = useTranslations('why-local');

  const benefits = [
    { key: 'control' },
    { key: 'integration' },
    { key: 'speed' },
    { key: 'privacy' },
    { key: 'offline' },
    { key: 'customization' }
  ];

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t('title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('subtitle')}
          </p>
        </div>

        {/* Comparison Table */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 mb-12 max-w-2xl mx-auto">
          <div className="grid grid-cols-3 gap-4 items-center text-center">
            <div className="text-gray-700 font-medium">
              {t('comparison.web')}
            </div>
            <div className="text-blue-600 font-bold text-lg">
              {t('comparison.vs')}
            </div>
            <div className="text-blue-600 font-bold">
              {t('comparison.local')}
            </div>

            <div className="text-green-600 text-sm">
              {t('comparison.webPros')}
            </div>
            <div className="text-gray-400">→</div>
            <div className="text-blue-600 text-sm font-medium">
              {t('comparison.localPros')}
            </div>
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit) => (
            <div key={benefit.key} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
              <div className="mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">
                    {benefit.key === 'control' && '🎛️'}
                    {benefit.key === 'integration' && '🔗'}
                    {benefit.key === 'speed' && '⚡'}
                    {benefit.key === 'privacy' && '🔒'}
                    {benefit.key === 'offline' && '📴'}
                    {benefit.key === 'customization' && '⚙️'}
                  </span>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {t(`benefits.${benefit.key}.title`)}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {t(`benefits.${benefit.key}.description`)}
              </p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-gray-600 text-lg">
            Ready to take control of your AI development workflow?
          </p>
        </div>
      </div>
    </section>
  );
}