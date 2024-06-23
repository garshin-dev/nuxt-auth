import type { NuxtI18nOptions } from '@nuxtjs/i18n';

const i18nConfig: NuxtI18nOptions = {
	strategy: 'no_prefix',
	defaultLocale: 'en',
	langDir: './src/shared/config/i18n',
	locales: [
		{
			code: 'en',
			name: 'English',
			file: 'en.json',
		},
		{
			code: 'ru',
			name: 'Русский',
			file: 'ru.json',
		}
	],
	detectBrowserLanguage: {
		useCookie: true,
		cookieKey: 'i18n_redirected',
		redirectOn: 'root',
		fallbackLocale: 'en'
	}
};

export default i18nConfig;