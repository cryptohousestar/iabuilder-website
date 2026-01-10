'use client';

import { useTranslations } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';
import { LanguageSelector } from './LanguageSelector';

export function Header() {
  const t = useTranslations('nav');

  return (
    <header className="border-b border-gray-200 bg-white">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <Link href="/" className="text-2xl font-bold text-gray-900">
              IABuilder
            </Link>

            <nav className="hidden md:flex space-x-6">
              <Link
                href="#features"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                {t('features')}
              </Link>
              <Link
                href="#demo"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                {t('demo')}
              </Link>
              <Link
                href="#install"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                {t('install')}
              </Link>
              <Link
                href="#docs"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                {t('docs')}
              </Link>
              <a
                href="https://github.com/cryptohousestar/Iabuilder"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                {t('github')}
              </a>
            </nav>
          </div>

          <div className="flex items-center">
            <LanguageSelector />
          </div>
        </div>
      </div>
    </header>
  );
}