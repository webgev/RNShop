import React from 'react';
import {
  Text,
  Pressable,
  StyleSheet,
  StyleProp,
  ViewStyle,
  TextStyle,
} from 'react-native';
import {COLORS} from 'styles/Colors';

interface Props {
  title: string;
  onPress?: () => any;
  style?: StyleProp<ViewStyle>;
  titleStyle?: StyleProp<TextStyle>;
}

export function Button(props: Props) {
  return (
    <Pressable
      onPress={props.onPress}
      style={({pressed}) => {
        const style = [styles.content, props.style];
        if (pressed) {
          style.push(styles.contentPress);
        }
        return style;
      }}>
      <Text style={[styles.text, props.titleStyle]}>{props.title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  content: {
    backgroundColor: COLORS.mainColor,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    shadowColor: COLORS.mainColor,
    shadowOpacity: 0.25,
    shadowOffset: {width: 0, height: 10},
    shadowRadius: 30,
  },
  contentPress: {
    backgroundColor: COLORS.mainColor2,
  },
  text: {
    color: COLORS.buttonTextColor,
    fontSize: 14,
    fontWeight: 'bold',
  },
});
