import { FirebaseAuthTypes } from '@react-native-firebase/auth';

export type RootStackParams = {
  Welcome: undefined;
  Login: undefined;
  PhoneVerification: {
    confirmation: FirebaseAuthTypes.ConfirmationResult;
    phone: string;
  };
  LoginWithEmail: undefined;
  EmailVerification: {
    email: string;
  };
  
  Home: undefined;
};
