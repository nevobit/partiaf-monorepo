import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableNativeFeedback,
} from 'react-native';

import {SafeAreaView} from 'react-native-safe-area-context';

import {CoverItem} from '../../components/CoverItem';
import {Dropdown} from '../../components/Dropdown';
import {CoverCount} from '../../components/CoverCount';

import LogoIcon from '../../assets/icons/logo-partiaf-neg.svg';
import CheckIcon from '../../assets/icons/check.svg';

import {theme} from '../../theme';
import {data} from '../../data/covers';
import {colors} from '../../layout/theme/colors';
import {SearchBar} from '../../components/SearchBar';

export const HomeScreen = ({navigation}) => {
  const [selected, setSelected] = useState('after-party');
  const [searchValue, onChangeValue] = useState();

  return (
    <SafeAreaView>
      <ScrollView style={styles.container}>
        <View style={styles.header}>
          <LogoIcon width={180} height={40} color={colors.dark.primary} />
          <TouchableNativeFeedback
            onPress={() => navigation.navigate('aproved-covers')}>
            <CheckIcon width={30} height={30} color={colors.dark.primary} />
          </TouchableNativeFeedback>
        </View>
        <View style={styles.body}>
          <View style={styles.head}>
            <Text style={styles.title}>Odisea</Text>
            <CoverCount selected={selected} data={data} />
          </View>

          <Dropdown selected={selected} setSelected={setSelected} data={data} />

          <View style={styles.list}>
            {selected &&
              data[selected].data.map(userData => (
                <CoverItem {...userData} key={userData.cc} />
              ))}
          </View>
        </View>
      </ScrollView>

      <View style={styles.buttonsContainer}>
        <SearchBar
          navigation={navigation}
          searchValue={searchValue}
          onChangeValue={onChangeValue}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: theme.screenPrimary,
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 30,
    paddingBottom: 15,
  },
  select: {
    position: 'relative',
  },
  body: {
    marginTop: 10,
    marginBottom: 25,
    zIndex: 0,
  },
  head: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 14,
  },
  title: theme.title,
  subtitle: theme.subtitle,
  list: {
    gap: 10,
  },
  buttonsContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: theme.roundButton,
  gradient: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 100,
  },
});
