import {ColorTheme} from './utils';

const backgroundColor = ColorTheme({
  dark: 'black',
  light: 'white',
});

const textColor = ColorTheme({
  dark: 'white',
  light: 'black',
});

const inputBorder = '#EBF0FF';
const inputFocusBorder = '#B6C8FF';

const mainColor = '#40BFFF';
const mainColor2 = '#00AAFF';
const buttonTextColor = '#ffffff';

const grey = '#9098B1';

export const COLORS = {
  backgroundColor,
  textColor,
  mainColor,
  mainColor2,
  buttonTextColor,
  inputBorder,
  inputFocusBorder,
  grey,
};
