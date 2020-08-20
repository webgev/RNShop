import React from 'react';
import {observer} from 'mobx-react';
import {IScreenProps} from 'utils/Interfaces';
import {List} from 'components/Products';
import {Container} from 'components/Layout/Container';

export const ProductListScreen = observer((props: IScreenProps) => {
  // в зависимости от type должны запросить нужные данные(новинки, акции и тд)
  const {title, type} = props.route.params;
  return (
    <Container>
      <List numColumns={2} />
    </Container>
  );
});
