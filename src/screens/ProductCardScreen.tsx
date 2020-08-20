import React from 'react';
import {IScreenProps} from 'utils/Interfaces';
import {ProductCard} from 'components/Products';
import {Container} from 'components/Layout/Container';

export function ProductCardScreen(props: IScreenProps) {
  React.useEffect(() => {
    //props.navigation.navigate('Login');
  }, [props.navigation]);

  return (
    <Container>
      <ProductCard />
    </Container>
  );
}
