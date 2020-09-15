import React from 'react';
import {StyleProp, View, ViewStyle} from 'react-native';
import {Input} from './Input';
import {Icons} from 'components';
import {COLORS} from 'styles/Colors';

interface Props {
  style?: StyleProp<ViewStyle>;
}

export const Search = (props: Props) => {
  const [value, setValue] = React.useState('');
  return (
    <View style={props.style}>
      <Input
        placeholder="Поиск"
        placeholderTextColor={COLORS.grey}
        value={value}
        onChangeText={setValue}
        leftContent={<Icons.Search color={COLORS.mainColor} />}
        rightContent={
          !!value && <Icons.Close width={16} onPress={() => setValue('')} />
        }
      />
    </View>
  );
};
