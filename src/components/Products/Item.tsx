import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  StyleProp,
  ViewStyle,
  TouchableOpacity,
} from 'react-native';
import {COLORS} from 'styles/Colors';
import {STYLES} from 'styles/Theme';
import {NavigationControl} from 'utils/NavigationControl';

const {width} = Dimensions.get('window');

interface Props {
  style?: StyleProp<ViewStyle>;
}

export function Item(props: Props) {
  const [widthContainer, setWidthContainer] = React.useState(width);
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={[styles.container, props.style]}
      onPress={() => {
        NavigationControl.navigate('ProductCard', {
          title: 'Nike Air Max 270 React ENG',
        });
      }}
      onLayout={(event) => {
        setWidthContainer(event.nativeEvent.layout.width);
      }}>
      <View style={styles.wrapper}>
        <Image
          source={require('assets/images/product.jpg')}
          style={[
            {
              width: widthContainer - 32,
              height: widthContainer - 32,
            },
          ]}
        />
        <Text style={[STYLES.title, styles.title]}>
          Nike Air Max 270 React ENG
        </Text>
        <Text style={STYLES.price}>$299,43</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 5,
    borderColor: COLORS.greyLight,
    borderWidth: 1,
    alignItems: 'flex-start',
  },
  wrapper: {
    padding: 16,
  },
  title: {
    marginVertical: 8,
  },
});
