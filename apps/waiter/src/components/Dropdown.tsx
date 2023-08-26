import React, {useState} from 'react';
import {
  Animated,
  ScrollView,
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

import FilterIcon from '../assets/icons/filter.svg';
import ChevronDownIcon from '../assets/icons/chevronDown.svg';
import ChevronUpIcon from '../assets/icons/chevronUp.svg';
import {useAnimation} from '../hooks/useAnimation';
import {Data} from '../data/covers';
import {colors} from '../layout/theme/colors';

interface DropdownProps {
  selected: string;
  setSelected: React.Dispatch<React.SetStateAction<string>>;
  data: Data;
}

export const Dropdown = ({selected, setSelected, data}: DropdownProps) => {
  const [toggle, setToggle] = useState(false);

  const [selectedname,  setSelectedName] = useState('Selecciona un ticket');
  const [animationStyles, handleAnimationStart, handleAnimationEnd] =
    useAnimation('height', {
      start: {
        toValue: 160,
        duration: 500,
        useNativeDriver: false,
      },
      end: {
        toValue: 0,
        duration: 500,
        useNativeDriver: false,
      },
    });

  const handleOpenDropdown = () => {
    if (toggle) {
      handleAnimationEnd();
      setToggle(false);
    } else {
      handleAnimationStart();
      setToggle(true);
    }
  };

  const handleCloseDropdown = (item: any) => {
    setSelected(item.id);
    setSelectedName(item.name);
    setToggle(false);
    handleAnimationEnd();
  };

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={handleOpenDropdown}>
        <View style={styles.box}>
          <View style={styles.iconContainer}>
            <FilterIcon width={25} height={25} color={colors.dark.text} />
          </View>

          <Text style={styles.text}>{selectedname}</Text>

          <View style={styles.iconContainer}>
            {toggle ? (
              <ChevronUpIcon width={25} height={25} color={colors.dark.text} />
            ) : (
              <ChevronDownIcon
                width={25}
                height={25}
                color={colors.dark.text}
              />
            )}
          </View>
        </View>
      </TouchableWithoutFeedback>

      <Animated.View style={[styles.dropdown, animationStyles]}>
        <ScrollView>
           {Object.values(data || [])?.map(item => (
            <TouchableNativeFeedback
              key={item.id}
              onPress={() => handleCloseDropdown(item)}>
              <Text
                style={
                  item.id === selected
                    ? styles.dropdownItemSelected
                    : styles.dropdownItem
                }>
                {item.name}
              </Text>
            </TouchableNativeFeedback>
          ))}
        </ScrollView>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    width: '100%',
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.dark.modal,
    borderRadius: 8,
    marginTop: 30,
    zIndex: 1,
  },
  box: {
    width: '90%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  iconContainer: {
    width: '10%',
  },
  text: {
    fontSize: 16,
    width: '75%',
    color: colors.dark.text,
  },
  dropdown: {
    position: 'absolute',
    height: 'auto',
    top: 40,
    width: '100%',
    zIndex: 1,
  },
  dropdownItem: {
    backgroundColor: colors.dark.modal,
    color: colors.dark.text,
    paddingVertical: 6,
    paddingHorizontal: 18,
    fontSize: 14,
  },
  dropdownItemSelected: {
    backgroundColor: colors.dark.primary,
    color: colors.dark.background,
    paddingVertical: 6,
    paddingHorizontal: 18,
    fontSize: 14,
  },
});
