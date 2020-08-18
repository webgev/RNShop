import {StyleSheet} from 'react-native';
import {COLORS} from './Colors';

export const CONSTANTS = {
  paddingContent: 20,
  sizeS: 12,
  sizeM: 14,
  sizeL: 16,
};

export const STYLES = StyleSheet.create({
  delimiterSmall: {
    height: 8,
  },
  delimiterBig: {
    height: 16,
  },
  title: {
    fontSize: CONSTANTS.sizeM,
    color: COLORS.textColor,
    fontWeight: 'bold',
  },
  span: {
    fontSize: CONSTANTS.sizeS,
    color: COLORS.grey,
  },
});
