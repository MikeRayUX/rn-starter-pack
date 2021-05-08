import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const baseWidth = 320;
const baseHeight = 568;

const scaleWidth = width / baseWidth;
const scaleHeight = height / baseHeight;
const scale = Math.min(scaleWidth, scaleHeight);

export const scaledFontSize = (size) => Math.ceil(size * scale);
