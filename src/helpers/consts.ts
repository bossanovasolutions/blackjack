import { Platform, StatusBar } from 'react-native';

export const isIos = Platform.OS === 'ios';

export const androidTop = isIos ? 70 : StatusBar.currentHeight;

export const BUNDLE_ID = 'com.bossanovasolutions.blackjack';

export const DEEPLINK = 'https://boilerplate.page.link/emailverified';

export const GOOGLE_PROJECT_ID =
  Platform.OS === 'ios'
    ? '519003371021-ts5ab8l4mq0m0bl2t0jnfhs4v30nkirc.apps.googleusercontent.com'
    : '519003371021-ts5ab8l4mq0m0bl2t0jnfhs4v30nkirc.apps.googleusercontent.com';
