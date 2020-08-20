import React from 'react';
import {
  FlatList,
  Dimensions,
  StyleProp,
  ViewStyle,
  StyleSheet,
} from 'react-native';
import {Item} from './Item';
import {HeaderList} from './HeaderList';
import {CONSTANTS} from 'utils/Constants';

const {width} = Dimensions.get('window');

interface Props {
  numColumns?: number;
  style?: StyleProp<ViewStyle>;
  horizontal?: boolean;
  headerTitle?: string;
  onPressHeaderMore?: () => any;
}

export function List(props: Props) {
  const numColumns = props.numColumns || 1;
  return (
    <>
      {props.headerTitle && (
        <HeaderList
          title={props.headerTitle}
          onPressMore={props.onPressHeaderMore}
        />
      )}
      <FlatList
        data={[1, 2, 3, 4]}
        renderItem={() => (
          <Item
            style={[
              styles.item,
              {
                width:
                  width / numColumns -
                  (32 / numColumns +
                    8 +
                    (numColumns <= 2 ? 0 : 8 / (numColumns - 1))),
              },
            ]}
          />
        )}
        horizontal={props.horizontal}
        numColumns={props.horizontal ? 1 : numColumns}
        style={[styles.list, props.style]}
        columnWrapperStyle={
          numColumns > 1 && !props.horizontal ? styles.listWrapper : undefined
        }
        showsHorizontalScrollIndicator={false}
      />
    </>
  );
}

const styles = StyleSheet.create({
  list: {
    paddingHorizontal: CONSTANTS.paddingContent,
  },
  listWrapper: {
    justifyContent: 'space-between',
  },
  item: {
    marginVertical: 8,
    marginRight: CONSTANTS.paddingContent,
  },
});
