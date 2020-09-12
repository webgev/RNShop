import React from 'react';
import {IScreenProps} from 'utils/Interfaces';
import {List} from 'components/Products';
import {Container} from 'components/Layout/Container';
import {ScrollView} from 'react-native';
import {LangModel} from 'models';

export function HomeScreen(props: IScreenProps) {
  React.useEffect(() => {
    //props.navigation.navigate('Login');
  }, [props.navigation]);

  return (
    <Container>
      <ScrollView>
        <List
          numColumns={2.2}
          horizontal
          headerTitle={LangModel.rk('Новинки')}
          onPressHeaderMore={() => {
            props.navigation.push('ProductList', {
              title: LangModel.rk('Новинки'),
              type: 'latest',
            });
          }}
        />
        <List
          numColumns={2.2}
          horizontal
          headerTitle={LangModel.rk('Акции')}
          onPressHeaderMore={() => {
            props.navigation.push('ProductList', {
              title: LangModel.rk('Акции'),
              type: 'action',
            });
          }}
        />
      </ScrollView>
    </Container>
  );
}
