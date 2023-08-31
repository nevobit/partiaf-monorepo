import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

import CheckIcon from '../assets/icons/checkRound.svg';
import {colors} from '../layout/theme/colors';

interface CoverItemProps {
  user: any;
  amount: string;
  coverType: string;
  date: string;
  checked: boolean;
}

export const CoverItem = ({
  user,
  amount,
  coverType,
  date,
  checked,
}: CoverItemProps) => {
  return (
    <View style={styles.container}>
         
      <View style={styles.column1}>
        <View>
          <Image style={{
            width: 60,
            height: 60,
            borderRadius: 100
          }} source={{
            uri:user.photo[0]? user.photo[0] : 'https://i.postimg.cc/0jMMGxbs/default.jpg'
          }} />
        </View>
        <View>
          <Text style={styles.title}>{user.firstname} {user.lastname}</Text>
          <Text style={styles.subtitle}>Cantidad: {amount}</Text>
        </View>

      </View>

      <View style={styles.column2}>
        <Text style={styles.title}>{coverType}</Text>
        <Text style={styles.subtitle}>{date}</Text>
      </View>

      <View style={styles.column3}>
        <CheckIcon
          width={28}
          height={28}
          color={checked ? colors.dark.primary : colors.dark.textInactive}
          style={styles.checkIcon}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 14,
    backgroundColor: colors.dark.modal,
    marginBottom: 14,
    borderRadius: 10,
  },
  column1: {
    width: '50%',
    gap: 8,
    flexDirection: 'row',
    alignItems: 'center'
    // backgroundColor: '#45f',
  },
  title: {
    fontSize: 16,
    color: colors.dark.text,
  },
  subtitle: {
    fontSize: 14,
    color: colors.dark.textInactive,
  },
  column2: {
    width: '30%',
    // alignItems: 'center',
    gap: 8,
    // backgroundColor: '#f5f',
  },
  column3: {
    width: '10%',
    // backgroundColor: '#4f4',
  },
  checkIcon: {
    width: 40,
    height: 40,
  },
});
