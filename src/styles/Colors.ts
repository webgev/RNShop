import {ColorTheme} from './utils';

const backgroundColor = ColorTheme({
  dark: 'black',
  light: 'white',
});

const textColor = ColorTheme({
  dark: 'white',
  light: 'black',
});

const mainColor = '#40BFFF';
const mainColor2 = '#00AAFF';
const buttonTextColor = '#ffffff';

const grey = '#9098B1';
const greyLight = '#EBF0FF';
const greyDark = '#223263';

const inputBorder = greyLight;
const inputFocusBorder = '#B6C8FF';

const tabBarBackgroundColor = '#ffffff';
const black = '#020202';

export const COLORS = {
  backgroundColor,
  textColor,
  mainColor,
  mainColor2,
  buttonTextColor,
  inputBorder,
  inputFocusBorder,
  grey,
  greyLight,
  greyDark,
  tabBarBackgroundColor,
  black,
};
