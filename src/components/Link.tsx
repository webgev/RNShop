import React from 'react';
import {
  StyleProp,
  Pressable,
  TextStyle,
  StyleSheet,
  ViewStyle,
} from 'react-native';
import {COLORS} from 'styles/Colors';
import {CONSTANTS} from 'utils/Constants';
import {Text} from './Text';

interface Props {
  title: string;
  onPress?: () => any;
  style?: StyleProp<TextStyle>;
  containerStyle?: StyleProp<ViewStyle>;
  size?: 's' | 'm' | 'l';
}

export const Link = (props: Props) => {
  const [active, setActive] = React.useState(false);
  let sizeStyle = styles.titleM;

  if (props.size === 's') {
    sizeStyle = styles.titleS;
  } else if (props.size === 'l') {
    sizeStyle = styles.titleL;
  }
  return (
    <Pressable
      onPress={props.onPress}
      onPressIn={() => setActive(true)}
      style={[styles.container, props.containerStyle]}
      onPressOut={() => setActive(false)}>
      <Text
        style={[
          styles.title,
          sizeStyle,
          props.style,
          active && styles.titleActive,
        ]}
        text={props.title}
      />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 16,
  },
  title: {
    color: COLORS.mainColor,
  },
  titleActive: {
    color: COLORS.mainColor2,
  },
  titleS: {
    fontSize: CONSTANTS.sizeS,
  },
  titleM: {
    fontSize: CONSTANTS.sizeM,
  },
  titleL: {
    fontSize: CONSTANTS.sizeL,
  },
});
