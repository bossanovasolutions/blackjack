import { Dimensions, PixelRatio } from 'react-native';

const { height, width } = Dimensions.get('window');
const baseWidth = 375;

const wp = (widthPercent: number) =>
  PixelRatio.roundToNearestPixel((width * widthPercent) / 100);

const hp = (heightPercent: number) =>
  PixelRatio.roundToNearestPixel((height * heightPercent) / 100);

const px = (valuePx: number) =>
  PixelRatio.roundToNearestPixel(width * (valuePx / baseWidth));

export const metrics = {
  wp,
  hp,
  px,
  height,
  width,
};
