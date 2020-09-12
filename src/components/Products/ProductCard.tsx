import React from 'react';
import {View, StyleSheet, Text, ScrollView, Pressable} from 'react-native';
import {observer} from 'mobx-react';
import {COLORS} from 'styles/Colors';
import {STYLES} from 'styles/Theme';
import {CONSTANTS} from 'utils/Constants';
import {Slider, Button, Text as LText} from 'components';

const data = [
  {
    id: '1',
    img: require('assets/images/product.jpg'),
  },
  {
    id: '2',
    img: require('assets/images/product.jpg'),
  },
];

const sizes = [1, 2, 3, 4];

export const ProductCard = observer(() => {
  const [activeSize, setActiveSize] = React.useState(0);
  return (
    <ScrollView>
      <Slider images={data} />
      <View style={styles.content}>
        <Text style={[STYLES.title, STYLES.textXXL]}>
          Nike Air Zoom Pegasus 36 Miami
        </Text>
        <View style={STYLES.delimiter24} />
        <Text style={[STYLES.price, STYLES.textXXL]}>$299,43</Text>
        <View style={STYLES.delimiter24} />
      </View>
      <LText
        style={[STYLES.title, STYLES.paddingHorizontal]}
        text="Выберете размер"
      />
      <View style={STYLES.delimiterBig} />
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={STYLES.paddingHorizontal}>
        {sizes.map((item) => (
          <Pressable
            onPress={() => setActiveSize(item)}
            style={[styles.circle, activeSize === item && styles.circleActive]}
            key={item}>
            <Text>{item}</Text>
          </Pressable>
        ))}
      </ScrollView>
      <View style={STYLES.delimiter24} />
      <View style={STYLES.delimiter24} />
      <Text style={[STYLES.paddingHorizontal, STYLES.text]}>
        The Nike Air Max 270 React ENG combines a full-length React foam midsole
        with a 270 Max Air unit for unrivaled comfort and a striking visual
        experience.
      </Text>
      <View style={STYLES.delimiter24} />
      <View style={STYLES.paddingHorizontal}>
        <Button title="Add to cart" />
      </View>
    </ScrollView>
  );
});

const styles = StyleSheet.create({
  content: {
    marginTop: 30,
    paddingHorizontal: CONSTANTS.paddingContent,
  },
  circle: {
    height: 48,
    width: 48,
    borderRadius: 48,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: COLORS.greyLight,
    borderWidth: 1,
    marginRight: 16,
  },
  circleActive: {
    borderColor: COLORS.mainColor,
  },
});
