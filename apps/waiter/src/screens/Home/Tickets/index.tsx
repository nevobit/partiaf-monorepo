import React, { useEffect } from 'react'
import { StyleSheet, View } from 'react-native'
import { theme } from '../../../theme'
import { CoverItem } from '../../../components/CoverItem'
import { useQuery } from '@apollo/client'
import { GET_GOERS_BY_TICKET_ID } from '../../../graphql/queries'
import { useSelector } from 'react-redux'

const Tickets = ({selected}: any) => {
  const {user} = useSelector((state: any) => state.auth);
    const {data: goers, refetch} = useQuery(GET_GOERS_BY_TICKET_ID, {
        variables: { id: selected },
        context: {
          headers: {
            authorization: user.token ? `Bearer ${user.token}` : '',
          },
        },
      })

      useEffect(() => {
        refetch()
      }, [selected])
  return (
    <View style={styles.list}>
    {selected &&
      goers?.getGoersByTicketId?.map((goer: any) => (
        <CoverItem {...goer} key={goer.id} />
      ))}
  </View> 
  )
}

export default Tickets


const styles = StyleSheet.create({
    container: theme.screenPrimary,
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingTop: 10,
      paddingBottom: 5,
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
      paddingTop: 20
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
  