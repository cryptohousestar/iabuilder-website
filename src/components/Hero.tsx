'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';

export function Hero() {
  const t = useTranslations('hero');

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-4xl text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
          {t('title')}
        </h1>
        <p className="text-xl text-gray-600 mb-4">
          {t('subtitle')}
        </p>
        <p className="text-lg text-gray-500 mb-8 max-w-2xl mx-auto">
          {t('description')}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="#install"
            className="bg-gray-900 text-white px-8 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors"
          >
            {t('cta.install')}
          </Link>
          <button className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors">
            {t('cta.demo')}
          </button>
        </div>
      </div>
    </section>
  );
}