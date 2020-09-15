import {StyleSheet} from 'react-native';
import {COLORS} from './Colors';
import {CONSTANTS} from 'utils/Constants';

export const STYLES = StyleSheet.create({
  flex: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: COLORS.backgroundColor,
  },
  wrapper: {
    paddingTop: CONSTANTS.paddingContent,
    flex: 1,
  },
  contentCenter: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
  hr: {
    backgroundColor: COLORS.greyLight,
    width: '100%',
    height: 1,
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
