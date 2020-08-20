import React from 'react';
import {IScreenProps} from 'utils/Interfaces';
import {List} from 'components/Products';
import {Container} from 'components/Layout/Container';
import {ScrollView} from 'react-native';
import {LangModel} from 'models';

export function UserScreen(props: IScreenProps) {
  React.useEffect(() => {
    //props.navigation.navigate('Login');
  }, [props.navigation]);

  return (
    <Container needAuth navigation={props.navigation}>
      <ScrollView>
        <List
          numColumns={2.2}
          horizontal
          headerTitle={LangModel.rk('Новинки')}
          onPressHeaderMore={() => {}}
        />
        <List
          numColumns={2.2}
          horizontal
          headerTitle={LangModel.rk('Акции')}
          onPressHeaderMore={() => {}}
        />
      </ScrollView>
    </Container>
  );
}
