import React from 'react';
import {StyleProp, Text, Pressable, TextStyle, StyleSheet} from 'react-native';
import {COLORS} from 'styles/Colors';
import { CONSTANTS } from 'styles/Theme';

interface Props {
  title: string;
  onPress?: () => any;
  style?: StyleProp<TextStyle>;
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
      style={{height: 16}}
      onPressOut={() => setActive(false)}>
      <Text
        style={[
          styles.title,
          sizeStyle,
          props.style,
          active && styles.titleActive,
        ]}>
        {props.title}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
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
