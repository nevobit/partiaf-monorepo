import {Text, StyleSheet} from 'react-native';
import React from 'react';
import {Data} from '../data/covers';
import {colors} from '../layout/theme/colors';
import { useQuery } from '@apollo/client';
import { useSelector } from 'react-redux';
import { GET_GOERS_BY_TICKET_ID } from '../graphql/queries';

interface CoverCountProps {
  selected: string;
  data: any;
}

export const CoverCount = ({selected, data}: CoverCountProps) => {
  const {user} = useSelector((state: any) => state.auth);


  const {data: goers, refetch} = useQuery(GET_GOERS_BY_TICKET_ID, {
    variables: { id: selected },
    context: {
      headers: {
        authorization: user.token ? `Bearer ${user.token}` : '',
      },
    },
  })


  return (
    <>
      {!selected ? (
        <Text style={styles.text}>
          {/* {getTotalChecked()}/{data[selected].data.length} */}
        </Text>
      ) : (
        <Text style={styles.text}>0/{goers?.getGoersByTicketId?.length}</Text>
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
