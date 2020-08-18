import React from 'react';
import {
  TextInput,
  StyleSheet,
  TextInputProps,
  View,
  TouchableOpacity,
  StyleProp,
  ViewStyle,
} from 'react-native';
import {COLORS} from 'styles/Colors';
import Icons from './Icons';

interface Props extends TextInputProps {
  containerStyle?: StyleProp<ViewStyle>;
  leftContent?: React.ReactElement;
  rightContent?: React.ReactElement;
}

export const Input = (props: Props) => {
  const {containerStyle, ...inputProps} = props;
  const [focus, setFocus] = React.useState(false);
  const [secureTextEntry, setSecureTextEntry] = React.useState(
    props.secureTextEntry,
  );
  return (
    <View
      style={[styles.container, focus && styles.inputFocus, containerStyle]}>
      {props.leftContent}
      <TextInput
        onFocus={() => {
          setFocus(true);
        }}
        onBlur={() => {
          setFocus(false);
        }}
        {...inputProps}
        secureTextEntry={secureTextEntry}
        style={[styles.input, props.style]}
      />
      {props.secureTextEntry && (
        <TouchableOpacity
          style={styles.eye}
          onPress={() => {
            setSecureTextEntry(!secureTextEntry);
          }}>
          <Icons.Eye
            color={
              secureTextEntry ? COLORS.inputBorder : COLORS.inputFocusBorder
            }
          />
        </TouchableOpacity>
      )}
      {props.rightContent}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: COLORS.inputBorder,
    paddingHorizontal: 10,
    borderRadius: 6,
  },
  input: {
    flex: 1,
    paddingLeft: 10,
    paddingRight: 2,
    height: 50,
    fontSize: 16,
  },
  inputFocus: {
    borderColor: COLORS.inputFocusBorder,
  },
});
