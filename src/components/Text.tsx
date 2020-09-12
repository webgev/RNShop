import React from 'react';
import {Text as RText, TextProps, StyleProp, TextStyle} from 'react-native';
import {observer} from 'mobx-react';
import {LangModel} from 'models';

interface Props extends TextProps {
  text: string;
  style?: StyleProp<TextStyle>;
}

export const Text = observer((props: Props) => {
  return <RText {...props}>{LangModel.rk(props.text)}</RText>;
});
