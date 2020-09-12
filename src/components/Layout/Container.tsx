import React from 'react';
import {View, SafeAreaView, StyleProp, ViewStyle} from 'react-native';
import {STYLES} from 'styles/Theme';
import {observer} from 'mobx-react';
import {AuthModel} from 'models';
import {Button, Text} from 'components';

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
        <View style={STYLES.contentCenter}>
          <Text text="Войдите что бы чтобы" />
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
