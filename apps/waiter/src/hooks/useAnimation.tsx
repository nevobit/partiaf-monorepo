import {useState} from 'react';
import {Animated} from 'react-native';

interface Timing {
  start: Animated.TimingAnimationConfig;
  end: Animated.TimingAnimationConfig;
}

interface AnimationStyles {
  [x: string]: Animated.Value;
}

export const useAnimation = (
  property: string,
  timing: Timing,
): [AnimationStyles, () => void, () => void] => {
  const [dropdownAnimation] = useState(new Animated.Value(0));

  const handleAnimationStart = () => {
    Animated.timing(dropdownAnimation, timing.start).start();
  };

  const handleAnimationEnd = () => {
    Animated.timing(dropdownAnimation, timing.end).start();
  };

  const animationStyles: AnimationStyles = {
    [property]: dropdownAnimation,
  };

  return [animationStyles, handleAnimationStart, handleAnimationEnd];
};
