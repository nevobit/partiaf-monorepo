module.exports = {
  presets: [
    'module:metro-react-native-babel-preset',
    'react-native-reanimated/plugin',
    {
       globals: ['__scanCodes'],
     },
  ],
};
