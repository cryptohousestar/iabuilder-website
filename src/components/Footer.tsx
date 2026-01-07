'use client';

import { useTranslations } from 'next-intl';

export function Footer() {
  const t = useTranslations('footer');

  return (
    <footer className="bg-gray-900 text-white py-12 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold mb-4">IABuilder</h3>
          <p className="text-gray-400 max-w-2xl mx-auto">
            {t('description')}
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8 mb-8">
          <a
            href="https://github.com/your-username/iabuilder"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
          >
            {t('links.github')}
          </a>
          <a
            href="https://github.com/your-username/iabuilder#readme"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
          >
            {t('links.docs')}
          </a>
          <a
            href="https://discord.gg/iabuilder"
            className="text-gray-400 hover:text-white transition-colors"
          >
            {t('links.discord')}
          </a>
        </div>

        <div className="text-center text-gray-400 text-sm">
          <p>{t('copyright')}</p>
        </div>
      </div>
    </footer>
  );
}