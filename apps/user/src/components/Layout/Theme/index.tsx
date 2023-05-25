/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  SafeAreaView,
  StyleProp,
  ViewStyle,
  ScrollView,
  StatusBar,
} from 'react-native';
import Colors from './colors';
import {ReactNode} from 'react';
import {useTheme} from '../../../contexts/ThemeContexts';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

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
          marginTop: top,
          width: '100%',
          backgroundColor: Colors[theme].background,
        },
        style,
      ]}>
      <StatusBar backgroundColor="rgba(10,10,10,1)" barStyle="light-content" />
      {children}
    </SafeAreaView>
  );
};
