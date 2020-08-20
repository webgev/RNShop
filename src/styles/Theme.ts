import {StyleSheet} from 'react-native';
import {COLORS} from './Colors';

export const CONSTANTS = {
  paddingContent: 16,
  sizeS: 12,
  sizeM: 14,
  sizeL: 16,
  sizeXL: 18,
  sizeXXL: 18,
};

export const STYLES = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.backgroundColor,
  },
  delimiterSmall: {
    height: 8,
  },
  delimiterBig: {
    height: 16,
  },
  delimiter24: {
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
  price: {
    color: COLORS.mainColor,
    fontWeight: 'bold',
  },
  textXXL: {
    fontSize: CONSTANTS.sizeXXL,
  },
  textXL: {
    fontSize: CONSTANTS.sizeXL,
  },
  textL: {
    fontSize: CONSTANTS.sizeL,
  },
  textM: {
    fontSize: CONSTANTS.sizeM,
  },
  textS: {
    fontSize: CONSTANTS.sizeS,
  },
  paddingHorizontal: {
    paddingHorizontal: CONSTANTS.paddingContent,
  },

  text: {
    color: COLORS.grey,
    fontSize: CONSTANTS.sizeM,
  },

  flexRow: {
    flexDirection: 'row',
  },

  spaceBetween: {
    justifyContent: 'space-between',
  },
});
