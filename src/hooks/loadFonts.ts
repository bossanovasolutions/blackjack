import * as Font from 'expo-font';
import {
  Montserrat_400Regular,
  Montserrat_600SemiBold,
  Montserrat_700Bold,
} from '@expo-google-fonts/montserrat';
import Icons from '../../assets/fonts/Icons.ttf';

const loadFonts = () => Font.loadAsync({
    Montserrat_400Regular,
    Montserrat_600SemiBold,
    Montserrat_700Bold,
    // @ts-ignore
    shair: Icons,
  })

export { loadFonts };
