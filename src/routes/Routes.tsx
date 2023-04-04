import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import analytics from '@react-native-firebase/analytics';
import type { RootStackParams } from '@types';
import { AuthContext } from '@contexts';

// Auth
import {
  WelcomeScreen,
  LoginScreen,
  PhoneVerificationScreen,
  LoginWithEmailScreen,
  EmailVerificationScreen,
} from '../domains/Auth';

// Home
import { HomeScreen } from '../domains/Home';

const RootStack = createNativeStackNavigator<RootStackParams>();

const Routes = () => {
  const { isAuthenticated } = React.useContext(AuthContext);
  const navigationRef = React.useRef(null);
  const routeNameRef = React.useRef(null);

  const onRouteChange = async () => {
    const previousRouteName = routeNameRef.current;
    const currentRouteName = navigationRef.current.getCurrentRoute().name;

    if (previousRouteName !== currentRouteName) {
      await analytics().logScreenView({
        screen_name: currentRouteName,
        screen_class: currentRouteName,
      });
    }
    routeNameRef.current = currentRouteName;
  };

  const onRouteReady = () => {
    routeNameRef.current = navigationRef.current.getCurrentRoute().name;
  };

  return (
    <NavigationContainer
      ref={navigationRef}
      onReady={onRouteReady}
      onStateChange={onRouteChange}
    >
      <RootStack.Navigator>
        {!isAuthenticated ? (
          // AUTH
          <RootStack.Group
            navigationKey="Auth"
            screenOptions={{ headerShown: false }}
          >
            <RootStack.Screen name="Welcome" component={WelcomeScreen} />
            <RootStack.Screen name="Login" component={LoginScreen} />
            <RootStack.Screen
              name="PhoneVerification"
              component={PhoneVerificationScreen}
            />
            <RootStack.Screen
              name="LoginWithEmail"
              component={LoginWithEmailScreen}
            />
            <RootStack.Screen
              name="EmailVerification"
              component={EmailVerificationScreen}
            />
          </RootStack.Group>
        ) : (
          <>
            {/* CARS */}
            <RootStack.Group
              navigationKey="Home"
              screenOptions={{ headerShown: false }}
            >
              <RootStack.Screen
                name="Home"
                component={HomeScreen}
                options={{ animation: 'fade' }}
              />
            </RootStack.Group>
          </>
        )}
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export { Routes };
