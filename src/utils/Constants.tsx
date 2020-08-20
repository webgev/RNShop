import {COLORS} from 'styles/Colors';

export const CONSTANTS = {
  paddingContent: 20,
  sizeS: 12,
  sizeM: 14,
  sizeL: 16,
  sizeXL: 18,
  sizeXXL: 18,

  headerOptions: ({route}) => {
    return {
      headerTitle: route.params?.title,
      headerBackTitleVisible: false,
      headerTintColor: COLORS.mainColor,
    };
  },
};
