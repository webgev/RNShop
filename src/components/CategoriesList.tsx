import {Icons} from 'components';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {COLORS} from 'styles/Colors';
import {CONSTANTS} from 'utils/Constants';
import {Text} from './Text';

export function CategoriesList() {
  return (
    <ScrollView
      horizontal
      contentContainerStyle={styles.contentContainer}
      showsHorizontalScrollIndicator={false}>
      {[1, 2, 3, 4, 5].map(() => (
        <View style={styles.row}>
          <View style={styles.circle}>
            <Icons.ManShirt />
          </View>
          <Text text="Man Work Equipment" style={styles.name} />
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  contentContainer: {paddingHorizontal: 10},
  row: {
    height: 108,
    padding: 6,
    width: 82,
  },
  circle: {
    width: 69,
    height: 69,
    borderRadius: 70,
    borderColor: COLORS.greyLight,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  name: {
    textAlign: 'center',
    color: COLORS.grey,
    fontSize: CONSTANTS.sizeS,
    lineHeight: 15,
    marginTop: 4,
  },
});
