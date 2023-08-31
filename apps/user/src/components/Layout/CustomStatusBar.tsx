import {View, StatusBar, Platform, StatusBarProps} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

const STATUSBAR_HEIGHT = Platform.OS == 'ios' ? 0 : StatusBar.currentHeight;

const CustomStatusBar = ({backgroundColor, ...props}: StatusBarProps) => {
  return (
    <View
      style={{
        height: STATUSBAR_HEIGHT,
        marginTop: -10,
        backgroundColor: 'rgba(0,0,0,1)',
      }}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  );
};

export default CustomStatusBar;
