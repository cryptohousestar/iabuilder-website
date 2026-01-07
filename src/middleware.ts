import createMiddleware from 'next-intl/middleware';
import { NextRequest } from 'next/server';

export default createMiddleware({
  // A list of all locales that are supported
  locales: ['en', 'es'],

  // Used when no locale matches
  defaultLocale: 'en',

  // Detect locale from browser preferences
  localeDetection: false,

  // Allow hiding the locale prefix for the default locale
  localePrefix: 'as-needed'
});

export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(es|en)/:path*']
};