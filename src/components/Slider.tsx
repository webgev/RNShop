import React from 'react';
import {FlatList, View, StyleSheet, Dimensions} from 'react-native';
import {COLORS} from 'styles/Colors';

interface IImage {
  id: string;
  img: any;
}
interface Props {
  children: React.ReactNode[];
}
const renderItem = ({item}: {item: React.ReactNode}) => (
  <View style={styles.row}>{item}</View>
);

export const Slider = (props: Props) => {
  const [index, setIndex] = React.useState(0);

  return (
    <>
      <FlatList
        data={props.children}
        renderItem={renderItem}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={16}
        onMomentumScrollEnd={(e) => {
          let contentOffset = e.nativeEvent.contentOffset;
          let viewSize = e.nativeEvent.layoutMeasurement;
          let pageNum = Math.floor(contentOffset.x / viewSize.width);
          setIndex(pageNum);
        }}
      />
      <View style={styles.circleContent}>
        {props.children.map((item: any, i: number) => (
          <View
            key={i}
            style={[styles.circle, i === index && styles.circleActive]}
          />
        ))}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  row: {
    alignItems: 'center',
    width: Dimensions.get('window').width,
    marginBottom: 20,
  },
  image: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height / 3,
    resizeMode: 'cover',
  },

  circleContent: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  circle: {
    height: 8,
    width: 8,
    borderRadius: 8,
    marginRight: 8,
    backgroundColor: COLORS.greyLight,
  },
  circleActive: {
    backgroundColor: COLORS.mainColor,
  },
});
