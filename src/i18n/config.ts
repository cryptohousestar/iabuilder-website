import { getRequestConfig } from 'next-intl/server';

export const locales = ['en', 'es'] as const;
export type Locale = typeof locales[number];

export default getRequestConfig(async ({ locale }) => {
  // Ensure locale is valid, fallback to 'en' if not
  const validLocale = locales.includes(locale as Locale) ? (locale as Locale) : 'en';

  return {
    locale: validLocale,
    messages: (await import(`../messages/${validLocale}.json`)).default
  };
});