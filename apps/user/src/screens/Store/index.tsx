import React, { useState } from "react";
import {
  Text,
  Image,
  Dimensions,
  View as DefaultView,
  StatusBar,
  Linking,
  Alert,
  TextInput,
} from "react-native";
import colors from "../../components/Layout/Theme/colors";
import Icon from "react-native-vector-icons/Ionicons";
import { TouchableOpacity } from "react-native";
import { GET_STORE_BY_ID } from "../../graphql/queries/users";
import { useSelector } from "react-redux";
import { useQuery } from "@apollo/client";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { BottomSheet } from "../../containers";
import Modal from "../../containers/Modal";
import { ScrollView } from "react-native-gesture-handler";

const screenHeight = Dimensions.get("screen").height;

const Store = ({ route, navigation }: any) => {
  const insets = useSafeAreaInsets();
  const [options, setOptions] = useState(false);
  const [report, setReport] = useState(false);

  const { user } = useSelector((state: any) => state.auth);
  const { data } = useQuery(GET_STORE_BY_ID, {
    variables: { getStoreByIdId: route.params.store },
    context: {
      headers: {
        authorization: user.token ? `Bearer ${user.token}` : "",
      },
    },
  });

  const sendReport = () => {
    Alert.alert("Reportar Negocio", "Establecimiento reportado correctamente");
    setReport(false);
    setOptions(false);
  };

  const sendWhatsAppMessage = async () => {
    await Linking.openURL(
      `http://api.whatsapp.com/send?phone=57${data?.getStoreById?.phone}` +
        "Quisiera hablar con alguien"
    );
  };

  const sendToLocation = async () => {
    await Linking.openURL(
      `https://www.google.com/maps/search/${data?.getStoreById?.name}/@6.2499801,-75.6705568,13z?entry=ttu`
    );
  };

  const handlerReport = () => {
    setOptions(false);
    setReport(true);
  }

  console.log(data)
  return (
    <DefaultView
      style={{
        paddingTop: insets.top,
        backgroundColor: "transparent",
      }}
    >
      <StatusBar translucent backgroundColor="transparent" />

      <DefaultView
        style={{
          position: "absolute",
          top: insets.top,
          left: 0,
          zIndex: 9999,
          paddingVertical: 10,
          paddingHorizontal: 10,
        }}
      >
        <TouchableOpacity
          onPress={() => navigation.goBack(null)}
          style={{
            backgroundColor: "rgba(0,0,0,.8)",
            borderRadius: 100,
            padding: 3,
            height: 40,
            width: 40,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Icon name="chevron-back-outline" size={25} color="#fff" />
        </TouchableOpacity>
      </DefaultView>
      <Image
        style={{
          position: "relative",
          top: -50,
          width: "100%",
          height: screenHeight * 0.4,
          resizeMode: "cover",
        }}
        source={{
          uri: data?.getStoreById?.photos[0]
            ? data?.getStoreById?.photos[0]
            : "https://i.postimg.cc/0jMMGxbs/default.jpg",
        }}
      />

      <DefaultView
        style={{
          backgroundColor: "rgba(0,0,0,1)",

          height: "100%",
        }}
      >
        <DefaultView
          style={{
            position: "relative",
            bottom: 80,
            // height: '100%',
            borderRadius: 30,
            backgroundColor: "rgba(0,0,0,1)",
            padding: 20,
            paddingTop: 20,
            paddingBottom: 0,
          }}
        >
          <DefaultView
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <DefaultView
              style={{
                backgroundColor: colors.dark.primary,
                borderRadius: 20,
                paddingHorizontal: 6,
                paddingVertical: 3,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                width: 60,
              }}
            >
              <Icon name="star-outline" size={16} color="#333" />
              <Text
                style={{
                  marginLeft: 5,
                  color: "#333",
                }}
              >
                4.24
              </Text>
            </DefaultView>
            <DefaultView>
              <TouchableOpacity onPress={() => setOptions(true)}>
                <Icon name="ellipsis-vertical" size={26} color="#fff" />
              </TouchableOpacity>
            </DefaultView>
          </DefaultView>

          <Text
            style={{
              color: "#fff",
              fontWeight: "600",
              fontSize: 20,
              marginTop: 10,
            }}
          >
            {data?.getStoreById?.name}
          </Text>
          <Text
            style={{
              color: "#fff",
              fontWeight: "500",
              fontSize: 16,
            }}
          >
            Santa Marta, Colombia
          </Text>
          <Text
            style={{
              color: "rgba(255,255,255,0.5)",
              fontWeight: "400",
              fontSize: 16,
            }}
          >
            {data?.getStoreById?.type}
          </Text>

          <DefaultView
            style={{
              flexDirection: "row",
              gap: 10,
              marginTop: 10,
            }}
          >
            <Text
              style={{
                color: "#fff",
                borderWidth: 1,
                borderColor: colors.dark.primary,
                paddingVertical: 4,
                paddingHorizontal: 10,
                borderRadius: 10,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {data?.getStoreById?.min_age}+
            </Text>
            <Text
              style={{
                color: "#fff",
                borderWidth: 1,
                borderColor: colors.dark.primary,
                paddingVertical: 2,
                paddingHorizontal: 10,
                borderRadius: 10,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {data?.getStoreById?.specialties?.plan[0]}
            </Text>
            <Text
              style={{
                color: "#fff",
                borderWidth: 1,
                borderColor: colors.dark.primary,
                paddingVertical: 2,
                paddingHorizontal: 10,
                borderRadius: 10,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {data?.getStoreById?.specialties.music[0]}
            </Text>
          </DefaultView>
        </DefaultView>

        <DefaultView
          style={{
            paddingHorizontal: 20,
            marginTop: -50,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            gap: 10,
            backgroundColor: "rgba(0,0,0,1)",
          }}
        >
          {/* <DefaultView
            style={{
              alignItems: 'center',
            }}>
            <Icon name="browsers-outline" color="#fff" size={30} />
            <Text
              style={{
                color: '#fff',
              }}>
              Reservas
            </Text>
          </DefaultView> */}
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("Covers", { store: route.params.store })
            }
            style={{
              backgroundColor: "rgba(255, 255, 255, .1)",
              borderRadius: 10,
              paddingHorizontal: 20,
              paddingVertical: 10,
              alignItems: "center",
            }}
          >
            <Icon name="barcode-outline" color="#fff" size={30} />
            <Text
              style={{
                color: "#fff",
              }}
            >
              Tickets
            </Text>
          </TouchableOpacity>
          {/* <DefaultView
            style={{
              alignItems: 'center',
            }}>
            <Icon name="fast-food-outline" color="#fff" size={30} />
            <Text
              style={{
                color: '#fff',
              }}>
              Menu
            </Text>
          </DefaultView> */}
        </DefaultView>
        {/* <DefaultView
          style={{
            borderWidth: 1,
            borderColor: 'rgba(255,255,255, .1)',
            paddingHorizontal: 20,
            borderLeftWidth: 0,
            borderRightWidth: 0,
            paddingVertical: 15,
            flexDirection: 'row',
            alignItems: 'center',
            gap: 10,
          }}>
          <Image
            style={{
              width: 60,
              height: 60,
              borderRadius: 100,
            }}
            source={{
              uri: 'https://i.ibb.co/Q8BQGxC/photo-1615109398623-88346a601842.jpg',
            }}
          />
          <DefaultView>
            <Text
              style={{
                color: '#fff',
                fontWeight: '500',
              }}>
              Alessandro de Bonis
            </Text>
            <Text
              style={{
                color: 'rgba(255,255,255,.8)',
              }}>
              Organizador
            </Text>
          </DefaultView>
        </DefaultView> */}
        <DefaultView
          style={{
            height: 140,
            paddingHorizontal: 20,
            paddingVertical: 10,
          }}
        >
       
          <ScrollView>
          <Text
            style={{
              fontWeight: "500",
              fontSize: 18,
              color: "#fff",
              marginBottom: 5,
            }}
          >
            Sobre el negocio
          </Text>
          <Text
            style={{
              color: "rgba(255,255,255,.6)",
              fontSize: 16,
            }}
          >
            {data?.getStoreById?.description}
          </Text>
          </ScrollView>
      
          {/* <Text
            style={{
              fontWeight: '500',
              fontSize: 18,
              color: '#fff',
            }}>
            Ubicacion
          </Text> */}
          {/* <MapView
        style={{ flex: 1 }}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      /> */}
        </DefaultView>
      </DefaultView>

      <BottomSheet isVisible={options} setIsVisible={setOptions}>
        <TouchableOpacity
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: 6,
            height: 50,
          }}
          onPress={sendWhatsAppMessage}
        >
          <Icon name="call-outline" size={22} color="#fff" />
          <Text
            style={{
              color: "#fff",
              fontSize: 14,
              fontWeight: "300",
            }}
          >
            Whatsapp
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: 4,
            height: 50,
          }}
          onPress={sendToLocation}
        >
          <Icon name="map-outline" size={22} color="#fff" />
          <Text
            style={{
              color: "#fff",
              fontSize: 14,
              fontWeight: "300",
            }}
          >
            Ubicacion
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          gap: 6,
          height: 50
        }}
        onPress={handlerReport}
        >
          <Icon name="warning-outline" size={22} color="#fff" />
          <Text
            style={{
              color: "#fff",
              fontSize: 14,
              fontWeight: "300",
            }}
          >
            Reportar
          </Text>
        </TouchableOpacity>
      </BottomSheet>

      <Modal isVisible={report} setIsVisible={setReport}>
        <TextInput
          style={{
            borderWidth: 1,
            borderColor: "#fff",
            borderRadius: 15,
            paddingHorizontal: 15,
            color: "#fff",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            display: "flex",
            height: 40
          }}
          placeholder="Razon"
          placeholderTextColor="rgba(255,255,255,.5)"
        />
        <TouchableOpacity
          style={{
            backgroundColor: colors.dark.primary,
            borderRadius: 15,
            height: 50,
            marginTop: 20,
            alignItems: "center",
            justifyContent: "center",
            marginBottom: 20,
          }}
          onPress={sendReport}
        >
          <Text
            style={{
              fontWeight: "600",
              fontSize: 16,
            }}
          >
            Enviar
          </Text>
        </TouchableOpacity>
      </Modal>
    </DefaultView>
  );
};

export default Store;
