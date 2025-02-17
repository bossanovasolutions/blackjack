import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import analytics from '@react-native-firebase/analytics';
import type { RootStackParams } from '@types';

// Home
import { HomeScreen } from '../domains/Home';

const RootStack = createNativeStackNavigator<RootStackParams>();

const Routes = () => {
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
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export { Routes };
