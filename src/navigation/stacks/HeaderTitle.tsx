import React from 'react';
import {Text} from 'components';
import {COLORS} from 'styles/Colors';

export function headerTitle(title: string): any {
  return <Text text={title} style={{color: COLORS.black}} />;
}
