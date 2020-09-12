import React from 'react';
import {View} from 'react-native';
import {Input} from './Input';
import {Icons} from 'components';
import {COLORS} from 'styles/Colors';
import {STYLES} from 'styles/Theme';

export const Search = () => {
  const [value, setValue] = React.useState('');
  return (
    <View style={STYLES.paddingHorizontal}>
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
