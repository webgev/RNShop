import React from 'react';
import {StyleSheet} from 'react-native';
import {STYLES, CONSTANTS} from 'styles/Theme';
import {CartItem} from 'components/Cart';
import {IProduct} from 'utils/Interfaces';
import {FlatList} from 'react-native-gesture-handler';

const data: IProduct[] = [
  {
    id: '1',
    images: [
      'https://images.asos-media.com/products/chernye-krossovki-new-balance-373/13699147-1-black?$XXL$&wid=513&fit=constrain',
    ],
    name: 'Nike Air Max 270 React ENG',
    price: '$299,43',
  },
  {
    id: '2',
    images: [
      'https://images.asos-media.com/products/chernye-krossovki-new-balance-373/13699147-1-black?$XXL$&wid=513&fit=constrain',
    ],
    name: 'Nike Air Max 270 React ENG',
    price: '$299,43',
  },
];
const renderItem = ({item}: {item: IProduct}) => (
  <CartItem product={item} style={styles.item} />
);

export const Cart = () => {
  return (
    <FlatList
      style={STYLES.paddingHorizontal}
      data={data}
      renderItem={renderItem}
    />
  );
};

const styles = StyleSheet.create({
  item: {
    marginBottom: CONSTANTS.paddingContent,
  },
});
