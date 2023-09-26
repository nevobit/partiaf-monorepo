import React from 'react'
import { View as DefaultView, Image, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

const Header = ({ navigation, openFilters, filters, back, wallet, ticket, options, openModal }: any) => {
    return (
        <DefaultView style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingTop: 20,
            paddingBottom: 10,
            paddingHorizontal: 10,
        }}>

            {back ? (
                <DefaultView
                    style={{
                        flexDirection: 'row',
                        gap: 15,
                    }}>


                    <TouchableOpacity
                        onPress={() => navigation.navigate('HomeScreen')}
                        style={{
                            flexDirection: 'row',
                            gap: 10,
                        }}>

                        <Icon name="chevron-back-outline" size={24} color="#fff" />
                    </TouchableOpacity>

                    {wallet || ticket? (
                        <></>
                    ): (
                        <Icon name="qr-code-outline" size={24} color="rgba(0,0,0,1)" />

                    )}

                </DefaultView>
            ) : (
                <></>
            )}

            {filters ? (
                <DefaultView style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'flex-start',
                    gap: 10
                }}>
                <DefaultView
                    style={{
                        flexDirection: 'row',
                        gap: 15,
                    }}>
                        <TouchableOpacity onPress={openFilters}>
                        <Icon name="options-outline" size={24} color="#fff" />
                    </TouchableOpacity>
                </DefaultView>
                <DefaultView
                style={{
                    flexDirection: 'row',
                    gap: 15,
                }}>
                    <TouchableOpacity onPress={() => navigation.navigate('Notifications')}>
                    <Icon name="notifications-outline" size={24} color="#fff" />
                </TouchableOpacity>
            </DefaultView>
                </DefaultView>

            ) : (
                <></>
            )}

            <Image
                style={{
                    width: 110,
                    height: 18,
                    resizeMode: 'contain',
                    tintColor: 'rgba(255,255,255,.9)',
                }}
                source={{
                    uri: 'https://i.ibb.co/4Y7W9S0/333333-Partiaf-logo-ios.png',
                }}
            />
            <DefaultView
                style={{
                    flexDirection: 'row',
                    gap: 15,
                }}>
                {!wallet && (

                    <TouchableOpacity onPress={() => navigation.navigate('Wallet')}>
                        <Icon name="wallet-outline" size={24} color="#fff" />
                    </TouchableOpacity>
                )}
                {!ticket && (
                    <TouchableOpacity onPress={() => navigation.navigate('Tickets')}>
                        <Icon name="qr-code-outline" size={24} color="#fff" />
                    </TouchableOpacity>
                )}

                {options && (
                    <TouchableOpacity onPress={() => openModal(true)}>
                        <DefaultView style={{
                            width: 25,
                            height: 2,
                            backgroundColor: '#fff',
                            marginBottom: 6,
                            marginTop: 4
                        }} />
                        <DefaultView style={{
                            width: 25,
                            height: 2,
                            backgroundColor: '#fff',
                            marginBottom: 6
                        }} />
                        <DefaultView style={{
                            width: 25,
                            height: 2,
                            backgroundColor: '#fff'
                        }} />
                        {/* <Icon name="menu-sharp" size={24} color="#fff" /> */}
                    </TouchableOpacity>
                )}

            </DefaultView>
        </DefaultView>
    )
}

export default Header
