import { createContext, useEffect, useState } from 'react';
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';
import analytics from '@react-native-firebase/analytics';
import { appleAuth } from '@invertase/react-native-apple-authentication';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { BUNDLE_ID, DEEPLINK, GOOGLE_PROJECT_ID } from '@helpers';
import dynamicLinks, {
  FirebaseDynamicLinksTypes,
} from '@react-native-firebase/dynamic-links';

type AuthContextData = {
  signOut: () => Promise<void>;
  phoneLogin: (phone: string) => Promise<FirebaseAuthTypes.ConfirmationResult>;
  googleLogin: () => Promise<void>;
  appleLogin: () => Promise<void>;
  resetPassword: (email: string) => Promise<void>;
  useEmailLinkEffect: (email: string) => { error: null; verified: boolean };
  sendSignInLinkToEmail: (email: string) => Promise<void>;
  user: FirebaseAuthTypes.User;
  isAuthenticated: boolean;
  hasMultifactor: boolean;
};

export const AuthContext = createContext({} as AuthContextData);

const sendSignInLinkToEmail = async (email: string) => {
  const actionCodeSettings = {
    handleCodeInApp: true,
    url: DEEPLINK,
    iOS: {
      bundleId: BUNDLE_ID,
    },
    android: {
      packageName: BUNDLE_ID,
      installApp: true,
      minimumVersion: '12',
    },
  };

  analytics().logEvent('send_email_verification');

  await auth().sendSignInLinkToEmail(email, actionCodeSettings);
};

// const storeUser = async (user: FirebaseAuthTypes.User) => {};

const signOut = async () => {
  try {
    await auth().signOut();
  } catch (e) {
    // @TODO
  }
};

const phoneLogin = async (phone: string) => {
  const confirmation = await auth().signInWithPhoneNumber(phone);

  return confirmation;
};

const googleLogin = async () => {
  await GoogleSignin.hasPlayServices({
    showPlayServicesUpdateDialog: true,
  });

  const { idToken } = await GoogleSignin.signIn();

  const googleCredential = auth.GoogleAuthProvider.credential(idToken);

  await auth().signInWithCredential(googleCredential);
  await analytics().logEvent('login_sucessfull', { method: 'google' });
};

const appleLogin = async () => {
  const appleAuthResponse = await appleAuth.performRequest({
    requestedOperation: appleAuth.Operation.LOGIN,
    requestedScopes: [appleAuth.Scope.EMAIL, appleAuth.Scope.FULL_NAME],
  });

  if (!appleAuthResponse.identityToken) {
    throw new Error('Apple Sign-In failed - no identify token returned');
  }

  const { identityToken, nonce } = appleAuthResponse;
  const appleCredential = auth.AppleAuthProvider.credential(
    identityToken,
    nonce
  );

  await auth().signInWithCredential(appleCredential);
  await analytics().logEvent('login_sucessfull', { method: 'apple' });
};

const resetPassword = async (email: string) => {
  try {
    await auth().sendPasswordResetEmail(email);
  } catch (e) {
    // @TODO
  }
};

const useEmailLinkEffect = (email: string) => {
  const [verified, setVerified] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const handleDynamicLink = async (
      link: FirebaseDynamicLinksTypes.DynamicLink
    ) => {
      if (auth().isSignInWithEmailLink(link.url)) {
        try {
          await auth().signInWithEmailLink(email, link.url);

          analytics().logEvent('email_validated');
          analytics().logEvent('login_sucessfull', { method: 'email' });

          setVerified(true);
        } catch (e) {
          setError(e?.message.split(']')[1]);
        }
      }
    };

    const unsubscribe = dynamicLinks().onLink(handleDynamicLink);

    dynamicLinks()
      .getInitialLink()
      .then((link) => link && handleDynamicLink(link));

    return () => unsubscribe();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { error, verified };
};

export const AuthProvider = ({ children }: { children: JSX.Element }) => {
  const [authState, setAuthState] = useState({
    isAuthenticated: false,
    user: {} as FirebaseAuthTypes.User,
    hasMultifactor: false,
  });

  useEffect(() => {
    GoogleSignin.configure({
      webClientId: GOOGLE_PROJECT_ID,
    });

    const unregisterAuthObserver = auth().onAuthStateChanged(
      async (user: FirebaseAuthTypes.User | null) => {
        if (user) {
          const isAuthenticated = !!user;

          setAuthState({
            user,
            isAuthenticated,
            hasMultifactor: user.multiFactor.enrolledFactors.length > 0,
          });

          if (isAuthenticated) {
            await storeUser(user);
            await analytics().setUserId(user.uid);
          }
        }
      }
    );
    return () => unregisterAuthObserver();
  }, []);

  return (
    <AuthContext.Provider
      // eslint-disable-next-line react/jsx-no-constructed-context-values
      value={{
        ...authState,
        signOut,
        appleLogin,
        googleLogin,
        phoneLogin,
        resetPassword,
        useEmailLinkEffect,
        sendSignInLinkToEmail,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
