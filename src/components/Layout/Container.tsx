import React from 'react';
import {View, Text, SafeAreaView, StyleProp, ViewStyle} from 'react-native';
import {STYLES} from 'styles/Theme';
import {observer} from 'mobx-react';
import {AuthModel, LangModel} from 'models';
import {Button} from 'components';

interface Props {
  children: React.ReactNode;
  needAuth?: boolean;
  navigation?: any;
  style?: StyleProp<ViewStyle>;
}

export const Container = observer((props: Props) => {
  return (
    <SafeAreaView style={[STYLES.container, props.style]}>
      {props.needAuth && !AuthModel.isAuth ? (
        <View>
          <Text>{LangModel.rk('Войдите что бы чтобы')}</Text>
          <Button
            title="Войти"
            onPress={() => {
              props.navigation.navigate('Login');
            }}
          />
        </View>
      ) : (
        props.children
      )}
    </SafeAreaView>
  );
});
