import React from 'react';
import {
  TextInput,
  StyleSheet,
  TextInputProps,
  View,
  StyleProp,
  ViewStyle,
  Pressable,
} from 'react-native';
import {COLORS} from 'styles/Colors';
import Icons from './Icons';
import {observer} from 'mobx-react';
import {LangModel} from 'models';

interface Props extends TextInputProps {
  containerStyle?: StyleProp<ViewStyle>;
  leftContent?: React.ReactNode;
  rightContent?: React.ReactNode;
}

export const Input = observer((props: Props) => {
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
        placeholder={LangModel.rk(inputProps.placeholder)}
        secureTextEntry={secureTextEntry}
        style={[styles.input, props.style]}
      />
      {props.secureTextEntry && (
        <Pressable
          onPress={() => {
            setSecureTextEntry(!secureTextEntry);
          }}>
          <Icons.Eye
            color={
              secureTextEntry ? COLORS.inputBorder : COLORS.inputFocusBorder
            }
          />
        </Pressable>
      )}
      {props.rightContent}
    </View>
  );
});

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
