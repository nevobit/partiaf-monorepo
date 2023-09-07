/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  SafeAreaView,
  StyleProp,
  ViewStyle,
} from 'react-native';
import {ReactNode} from 'react';
import CustomStatusBar from '../CustomStatusBar';

interface Props {
  style?: StyleProp<ViewStyle>;
  children: ReactNode;
}

export const View = ({style, children}: Props) => {
  return (
    <SafeAreaView
      style={[
        {
          // flex: 1,
          width: '100%',
          backgroundColor: "#000",
        },
        style,
      ]}>
      <CustomStatusBar
        translucent
        backgroundColor="#000"
        barStyle="light-content"
      />
      {children}
    </SafeAreaView>
  );
};
