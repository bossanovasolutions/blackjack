import { createIconSetFromIcoMoon } from '@expo/vector-icons';
import { DefaultTheme } from 'styled-components/native';
import { Icons as IconsNames } from '@types';
import { theme } from '@theme';
import selection from '../../../assets/fonts/selection.json';

type IconProps = {
  name: IconsNames;
  size?: number;
  color?: keyof DefaultTheme['colors'];
};

const BaseIcon = createIconSetFromIcoMoon(selection, 'shair', 'shair.ttf');

export const Icon = ({ name, size = 48, color = 'black' }: IconProps) => (
  <BaseIcon name={name} size={size} color={theme.colors[color]} />
);
