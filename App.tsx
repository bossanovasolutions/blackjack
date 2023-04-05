import { useEffect, useState } from 'react';
import * as ExpoSplashScreen from 'expo-splash-screen';
import { ThemeProvider } from 'styled-components/native';
import { StatusBar } from 'expo-status-bar';
import { theme } from '@theme';
import { loadFonts } from '@hooks';
import { AuthProvider } from '@contexts';
import { QueryClientProvider } from 'react-query';
import { queryClient } from '@services';
import { Routes } from './src/routes';

ExpoSplashScreen.preventAutoHideAsync();

export const App = () => {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        await loadFonts();
      } finally {
        setAppIsReady(true);
        ExpoSplashScreen.hideAsync();
      }
    }

    prepare();
  }, []);

  if (!appIsReady) {
    return null;
  }

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <AuthProvider>
          <>
            <StatusBar style="dark" />
            <Routes />
          </>
        </AuthProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
};
