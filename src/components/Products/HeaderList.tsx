import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  GestureResponderEvent,
  StyleProp,
  ViewStyle,
} from 'react-native';
import {COLORS} from 'styles/Colors';
import {STYLES} from 'styles/Theme';
import {CONSTANTS} from 'utils/Constants';

interface Props {
  title: string;
  onPressMore?: (event: GestureResponderEvent) => void;
  style?: StyleProp<ViewStyle>;
}

export function HeaderList(props: Props) {
  return (
    <View style={[styles.header, props.style]}>
      <Text style={STYLES.title}>{props.title}</Text>
      {props.onPressMore && (
        <TouchableOpacity
          style={styles.moreContent}
          activeOpacity={0.8}
          onPress={props.onPressMore}>
          <Text style={styles.more}>Еще</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: CONSTANTS.paddingContent,
    alignItems: 'center',
    paddingVertical: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  moreContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  more: {
    color: COLORS.mainColor,
    fontSize: 14,
    paddingRight: 6,
    fontWeight: 'bold',
  },
});
