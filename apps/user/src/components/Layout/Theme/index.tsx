/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  SafeAreaView,
  StyleProp,
  ViewStyle,
  ScrollView,
  StatusBar,
  View as DefaultView,
} from 'react-native';
import Colors from './colors';
import {ReactNode} from 'react';
import {useTheme} from '../../../contexts/ThemeContexts';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import CustomStatusBar from '../CustomStatusBar';

interface Props {
  style?: StyleProp<ViewStyle>;
  children: ReactNode;
}

export const View = ({style, children}: Props) => {
  const {top} = useSafeAreaInsets();
  const {theme} = useTheme();
  return (
    <SafeAreaView
      style={[
        {
          width: '100%',
          backgroundColor: Colors[theme].background,
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
