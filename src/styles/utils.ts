import {Appearance} from 'react-native';

interface ThemeObject {
  light: string;
  dark: string;
}

export const ColorTheme = (objects: ThemeObject) => {
  const scheme = Appearance.getColorScheme();
  if (scheme === 'dark') {
    return objects.dark;
  }
  return objects.light;
};