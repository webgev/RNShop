import React from 'react';


interface Props {
  name: string;
  focused: boolean;
  colorFocus?: string;
}

export default function TabBarIcon(props: Props) {
  const colorFocus = props.colorFocus || '#0C1223';
  return (
    <Icon
      name={props.name}
      size={26}
      style={{marginBottom: -3}}
      color={props.focused ? colorFocus : '#D6D0E2'}
    />
  );
}
