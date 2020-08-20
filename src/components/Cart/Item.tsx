import React from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  Pressable,
  StyleProp,
  ViewStyle,
  TouchableOpacity,
} from 'react-native';
import {STYLES, CONSTANTS} from 'styles/Theme';
import {COLORS} from 'styles/Colors';
import {Icons} from 'components';
import {IProduct} from 'utils/Interfaces';
import {NavigationControl} from 'utils/NavigationControl';

interface Props {
  product: IProduct;
  style?: StyleProp<ViewStyle>;
}

export const CartItem = (props: Props) => {
  const {style, product} = props;
  const [count, setCount] = React.useState(1);
  return (
    <TouchableOpacity
      style={[STYLES.flexRow, styles.cart, style]}
      activeOpacity={0.8}
      onPress={() => {
        NavigationControl.navigate('ProductCard');
      }}>
      <Image source={{uri: product.images[0]}} style={styles.image} />
      <View style={[STYLES.spaceBetween, styles.content]}>
        <Text style={STYLES.title}>{product.name}</Text>
        <View style={[STYLES.flexRow, STYLES.spaceBetween]}>
          <Text style={STYLES.price}>{product.price}</Text>
          <View style={[STYLES.flexRow, styles.counter, STYLES.spaceBetween]}>
            <Pressable
              style={styles.button}
              onPress={() => setCount(Math.max(count - 1, 0))}>
              <Icons.Munis />
            </Pressable>
            <View style={styles.count}>
              <Text style={styles.count}>{count}</Text>
            </View>
            <Pressable
              style={styles.button}
              onPress={() => setCount(count + 1)}>
              <Icons.Plus style={styles.button} />
            </Pressable>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cart: {
    borderRadius: 5,
    borderWidth: 1,
    borderColor: COLORS.greyLight,
    padding: CONSTANTS.paddingContent,
    height: 120,
  },
  image: {
    width: 120 - CONSTANTS.paddingContent * 2,
    height: 120 - CONSTANTS.paddingContent * 2,
    marginRight: 8,
    borderRadius: 6,
  },
  content: {
    paddingVertical: 6,
    flex: 1,
  },
  counter: {
    width: 104,
    height: 24,
    borderWidth: 1,
    borderColor: COLORS.greyLight,
    borderRadius: 5,
  },
  button: {
    width: 32,
    alignItems: 'center',
    justifyContent: 'center',
  },
  count: {
    backgroundColor: COLORS.greyLight,
    width: 40,
    textAlign: 'center',
    color: COLORS.greyDark,
    justifyContent: 'center',
  },
});
