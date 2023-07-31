import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

// iPhone 13 pro max Resolution: 428 x 926 dp.
const guidelineBaseWidth = 428;
const guidelineBaseHeight = 926;

const horizontalScale = (size: number): number => (width / guidelineBaseWidth) * size;
const verticalScale = (size: number): number => (height / guidelineBaseHeight) * size;
const moderateScale = (size: number, factor = 0.5): number =>
  size + (horizontalScale(size) - size) * factor;

export { guidelineBaseHeight, guidelineBaseWidth, horizontalScale, verticalScale, moderateScale };
