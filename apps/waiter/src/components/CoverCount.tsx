import {Text, StyleSheet} from 'react-native';
import React from 'react';
import {Data} from '../data/covers';
import {colors} from '../layout/theme/colors';

interface CoverCountProps {
  selected: string;
  data: Data;
}

export const CoverCount = ({selected, data}: CoverCountProps) => {
  const getTotalChecked = () => {
    const checked = data[selected].data.filter(cover => cover.checked);

    return checked.length;
  };

  return (
    <>
      {!selected ? (
        <Text style={styles.text}>
          {getTotalChecked()}/{data[selected].data.length}
        </Text>
      ) : (
        <Text style={styles.text}>0/0</Text>
      )}
    </>
  );
};
const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    color: colors.dark.primary,
  },
});
