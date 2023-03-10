import React, { useEffect, useState } from "react";
import {
  StatusBar,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
  ScrollView,
  Linking,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { IStore } from "../../types";
import { Text } from "react-native";
import { useMutation, useQuery } from "@apollo/client";
import { GET_STORE } from "../../graphql/queries/stores";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../navigation/AppNavigator";
import Header from "../../components/Layout/Header";
import Modal from "react-native-modal";
import { DivisaFormater } from "../../utilities/divisaFormater";
import { GET_COMMENTS } from "../../graphql/queries/comments";
import { useSelector } from "react-redux";
import TimeAgo from "react-native-timeago";
import moment from "moment";
import "moment/locale/es";
import DateTimePicker from '@react-native-community/datetimepicker';
import { CREATE_BOOKING } from "../../graphql/queries/bookings";
import ModalStore from "../../components/ModalStore";

moment.locale("es");

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList>;

type Props = {
  route: any;
  navigation: HomeScreenNavigationProp;
};

const Store = ({ route, navigation }: Props) => {
  
  const { data, loading, error } = useQuery(GET_STORE, {
    variables: { uuid: route.params.store },
  });

  const [modal, setModal] = useState(false);
  const [modalOptions, setModalOptions] = useState(false);

  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState<any>(new Date());
  const [amount, setAmount] = useState<number>(1);
  const [consumption, setConsumption] = useState<number>(10000);
  

  const [open, setOpen] = useState(false);

  const { user } = useSelector((state: any) => state.auth);

  const [info, setInfo] = useState("");
  const [show, setShow] = useState(false);

  const onChangeDate = (event:any, selectedDate:any) => {
    const currentDate = selectedDate;
    setShow(false);
    setDate(currentDate);
  };
  
  const onChangeTime = (event:any, selectedDate:any) => {
    const currentDate = selectedDate;
    setOpen(false);
    setDate(currentDate);
  };
  
  const [createBooking] = useMutation(CREATE_BOOKING);
  
  const createBookingHandler = async () => {
    try {
      const { data } = await createBooking({
        variables: {
          data:{
            chairs: amount.toString(),
            consumption: consumption.toString(),  
            date: date,
            time: time.toString().substring(16, 21),
            name: user.username,
            status: 'in list',
            store: route.params.store,
            user: user.uuid
          }
        },
      });
      
      alert("Reserva realizada exitosamente!");
      setModal(false)

    } catch (err:any) {
      setInfo(err)
      console.log(err);
    }
    refetch();
  };
  
  // const bookingInfo = {
  //   chairs: amount,
  //   consumption: consumption,  
  //   date: date,
  //   time: time,
  //   name: user.username,
  //   status: 'in list',
  //   store: route.params.store,
  //   user: user.uuid
  // }

  
  const {
    data: comments,
    loading: loadginComments,
    refetch,
    startPolling,
    stopPolling,
  } = useQuery(GET_COMMENTS, {
    variables: { uuid: route.params.store },
  });

  useEffect(() => {
    refetch()
    startPolling(1000);
    return () => {
      stopPolling();
    };
  }, [startPolling, stopPolling]);

  return (
    <SafeAreaView style={{ backgroundColor: "#fff" }}>
      <StatusBar animated={true} />
      <Header navigation={navigation} back={true} />

      <Image
        source={{ uri: data?.getStoreById?.photos[0] }}
        style={{
          width: "100%",
          height: 250,
        }}
      />

      <View
        style={{
          width: "100%",
          borderBottomColor: "rgba(0, 0, 0,.03)",
          borderBottomWidth: 1,
          padding: 10,
          paddingHorizontal: 20,
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          justifyContent: "space-between",
        }}
      >
        <View>
          <Text style={{ fontSize: 20, fontWeight: "700" }}>
            {data?.getStoreById?.name}
          </Text>
          <Text style={{ fontSize: 16, fontWeight: "500" }}>
            Santa Marta, Colombia
          </Text>
          <Text
            style={{
              fontSize: 16,
              fontWeight: "500",
              color: "rgba(0,0,0,0.7)",
            }}
          >
            {data?.getStoreById?.type}
          </Text>
          <Text>
            {" "}
            <Ionicons
              name="ios-star-outline"
              style={{ fontWeight: "100", fontSize: 16 }}
            />
            4.24
          </Text>
        </View>
        <TouchableOpacity onPress={() => setModalOptions(true)}>
          <View
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "flex-end",
              flexDirection: "column",
              width: 100,
              height: 70,
              marginTop: -19,
              marginRight: -19,
              paddingRight: 20,
            }}
          >
            <View
              style={{
                height: 3,
                width: 3,
                backgroundColor: "rgba(0,0,0,.7)",
                borderRadius: 50,
                margin: 3,
              }}
            ></View>
            <View
              style={{
                height: 3,
                width: 3,
                backgroundColor: "rgba(0,0,0,.8)",
                borderRadius: 50,
                margin: 3,
              }}
            ></View>
            <View
              style={{
                height: 3,
                width: 3,
                backgroundColor: "rgba(0,0,0,.8)",
                borderRadius: 50,
                margin: 3,
              }}
            ></View>
          </View>
        </TouchableOpacity>
      </View>
    
      <View style={{
        height: '100%', 
      }}>
        <View
          style={{
            width: "100%",
            borderBottomColor: "rgba(0, 0, 0,.03)",
            borderBottomWidth: 1,
            padding: 10,
            paddingHorizontal: 20,
            marginTop: 5,
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
            justifyContent: "space-evenly",
          }}
        >
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("Covers", { store: route.params.store })
            }
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            {/* <Image
              source={{ uri: "https://i.postimg.cc/SN7Jyd4b/covers-disco.png" }}
              style={{
                width: 25,
                height: 25,
                resizeMode: "contain",
              }}
            /> */}
            <Ionicons
              style={{
                fontSize: 30,
                color: "rgba(0, 0, 0,0.8)",
              }}
              name="ios-barcode-outline"
            />
            <Text
              style={{
                fontWeight: "600",
                fontSize: 16,
                color: "rgba(0,0,0,0.7)",
              }}
            >
              Tickets
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              display: "flex",
              alignItems: "center",
            }}
            onPress={() => setModal(true)}
          >
            {/* <Image
              source={{ uri: "https://i.postimg.cc/xjP284X5/menu-disco.png" }}
              style={{
                width: 25,
                height: 25,
                resizeMode: "contain",
              }}
            /> */}
            <Ionicons
              style={{
                fontSize: 30,
                color: "rgba(0, 0, 0,0.8)",
              }}
              name="person-add-outline"
            />
            <Text
              style={{
                fontWeight: "600",
                fontSize: 16,
                color: "rgba(0,0,0,0.7)",
              }}
            >
              Reservas
            </Text>
          </TouchableOpacity>
          {/* <TouchableOpacity
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Image
              source={{
                uri: "https://i.postimg.cc/mrcLFNvD/reserva-disco.png",
              }}
              style={{
                width: 25,
                height: 25,
                resizeMode: "contain",
              }}
            />
            <Text
              style={{
                fontWeight: "600",
                fontSize: 16,
                color: "rgba(0,0,0,0.7)",
              }}
            >
              Menu
            </Text>
          </TouchableOpacity> */}
        </View>

        <View
          style={{
            backgroundColor: "#fff",
            position: "relative",
            height: "100%",
          }}
        >
          <View style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop:8
          }}>
            
          <Text
            style={{
              fontWeight: "600",
              paddingHorizontal: 20,
              fontSize: 20,
              marginBottom: 5,
            }}
          >
            Comentarios
          </Text>
          <TouchableOpacity
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              marginRight: 15,
            }}
            
            onPress={() => navigation.navigate("Comments", { store: route.params.store })}
          >
            <Ionicons name="ios-chatbubbles-outline" style={{ fontSize: 27 }} />
          </TouchableOpacity>
          </View>
          
          <ScrollView
            style={{
              paddingHorizontal: 15,
              paddingVertical: 10,
              height: "100%",
            }}
          >
            {comments?.getCommentsByStore.map((comment: any) => {
              return (
                <TouchableOpacity
                key={comment.uuid}
                  style={{
                    flexDirection: "row",
                    marginBottom: 15,
                  }}
                onPress={() => navigation.navigate("Comments", { store: route.params.store })}
                  
                >
                  <View
                    style={{
                      height: 40,
                      width: 40,
                      borderRadius: 50,
                      overflow: "hidden",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginRight: 10,
                    }}
                  >
                    <Image
                      style={{
                        width: "100%",
                        height: "100%",
                        borderRadius: 50,
                        resizeMode: "cover",
                      }}
                      source={{
                        uri: comment.photo
                          ? comment.photo
                          : "https://i.postimg.cc/0jMMGxbs/default.jpg",
                      }}
                    />
                  </View>
                  <View
                    style={{
                      width: "85%",
                    }}
                  >
                    <Text style={{ fontSize: 16 }}>
                      <Text style={{ fontWeight: "600" }}>{comment.user}</Text>{" "}
                      <TimeAgo time={parseInt(comment.createdAt)} />{" "}
                    </Text>
                    <Text style={{ fontSize: 16 }}>{comment.text}</Text>
                  </View>
                </TouchableOpacity>
              );
            })}
          </ScrollView>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              paddingHorizontal: 15,
              position: "absolute",
              backgroundColor: "#FFFFFF",
              bottom: 0,
              height: 60,
            }}
          >
            <View
              style={{
                height: 40,
                width: 40,
                borderRadius: 50,
                overflow: "hidden",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginRight: 10,
              }}
            >
              <Image
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: 50,
                  resizeMode: "cover",
                }}
                source={{
                  uri: user.photo[0]
                    ? user.photo[0]
                    : "https://i.postimg.cc/0jMMGxbs/default.jpg",
                }}
              />
            </View>
          </View>
        </View>
      </View>
                
      <Modal
        onSwipeStart={() => setModal(false)}
        style={{
          justifyContent: "flex-end",
          margin: 0,
        }}
        animationOut="slideOutDown"
        isVisible={modal}
        swipeDirection={["down"]}
        onBackButtonPress={() => setModal(false)}
        onBackdropPress={() => setModal(false)}
      >
        <View
          style={{
            backgroundColor: "#fff",
            height: 430,
            width: "100%",
            justifyContent: "flex-end",
            alignItems: "flex-start",
            borderTopStartRadius: 20,
            borderTopEndRadius: 20,
            borderColor: "rgba(0,0,0,0.1)",
            position: "relative",
            // padding: 20,
            paddingBottom: 0,
          }}
        >
          
          <View
            style={{
              position: "absolute",
              top: 15,
              width: "100%",
              height: 40,
              borderRadius: 50,
            }}
          >
            <Text
              style={{
                fontSize: 18,
                fontWeight: "500",
                textAlign: "center",
              }}
            >
              Haz una reserva
            </Text>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
            }}
          >
            <View
              style={{
                flexDirection: "column",
                width: "100%",
                borderTopWidth: 1,
                borderColor: "rgba(0,0,0,0.1)",
                paddingHorizontal: 20,
                paddingVertical: 10,
              }}
            >
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: "600",
                }}
              >
                Seleccionar fecha y hora
              </Text>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "100%",
                  paddingVertical: 8,
                }}
              >
                <TouchableOpacity
                  style={{
                    padding: 15,
                    borderRadius: 5,
                    borderWidth: 1,
                    borderColor: "rgba(0,0,0,0.1)",
                    marginRight: 20,
                    width: "50%",
                  }}
                  onPress={() => setShow(true)}
                >
                  <Text>Fecha</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    padding: 15,
                    borderRadius: 5,
                    borderWidth: 1,
                    borderColor: "rgba(0,0,0,0.1)",
                    width: "50%",
                  }}
                  onPress={() => setOpen(true)}
                >
                  <Text>Hora</Text>
                </TouchableOpacity>
                {show && (
                  
                <DateTimePicker
                  value={date}
                  mode="date"
                  onChange={onChangeDate}
                />
                )}
                
                {open && (
                  
                  <DateTimePicker
                    value={time}
                    mode="time"
                    onChange={onChangeTime}
                  />
                  )}
                
              </View>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                width: "100%",
                borderTopWidth: 1,
                borderColor: "rgba(0,0,0,0.1)",
                paddingHorizontal: 20,
                paddingVertical: 10,
              }}
            >
              <Text
                style={{
                  fontSize: 18,
                }}
              >
                Numero de personas
              </Text>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <TouchableOpacity
                  style={{
                    backgroundColor: "rgba(0,0,0,0.1)",
                    borderRadius: 5,
                    padding: 3,
                  }}
                  onPress={() => amount > 1 && setAmount((prev) => prev - 1)}
                >
                  <Ionicons
                    name="ios-remove"
                    style={{ fontWeight: "100", fontSize: 30 }}
                  />
                </TouchableOpacity>
                <Text
                  style={{
                    padding: 15,
                    fontSize: 22,
                  }}
                >
                  {amount}
                </Text>
                <TouchableOpacity
                  style={{
                    backgroundColor: "rgba(0,0,0,0.1)",
                    borderRadius: 5,
                    padding: 3,
                  }}
                  
                  onPress={() => setAmount((prev) => prev + 1)}
                >
                  <Ionicons
                    name="ios-add"
                    style={{ fontWeight: "100", fontSize: 30 }}
                  />
                </TouchableOpacity>
              </View>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                width: "100%",
                borderBottomWidth: 1,
                borderTopWidth: 1,
                borderColor: "rgba(0,0,0,0.1)",
                paddingHorizontal: 20,
                paddingVertical: 10,
              }}
            >
              <Text
                style={{
                  fontSize: 18,
                }}
              >
                Consumo minimo
              </Text>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <TouchableOpacity
                  style={{
                    backgroundColor: "rgba(0,0,0,0.1)",
                    borderRadius: 5,
                    padding: 3,
                  }}
                  onPress={() => consumption > 10000 && setConsumption((prev) => prev - 10000)}
                >
                  <Ionicons
                    name="ios-remove"
                    style={{ fontWeight: "100", fontSize: 30 }}
                  />
                </TouchableOpacity>
                <Text
                  style={{
                    padding: 15,
                    fontSize: 22,
                  }}
                >
                  {DivisaFormater(consumption)}
                </Text>
                <TouchableOpacity
                  style={{
                    backgroundColor: "rgba(0,0,0,0.1)",
                    borderRadius: 5,
                    padding: 3,
                  }}
                  onPress={() => setConsumption((prev) => prev + 10000)}
                >
                  <Ionicons
                    name="ios-add"
                    style={{ fontWeight: "100", fontSize: 30 }}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View
            style={{
              padding: 20,
              width: "100%",
            }}
          >
            <TouchableOpacity
              style={{
                width: "100%",
                height: 60,
                backgroundColor: "#FFE243",
                borderRadius: 20,
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
              onPress={() => createBookingHandler()}
            >
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: "500",
                  letterSpacing: 1,
                  color: "rgba(0,0,0,0.8)",
                  textTransform: "uppercase",
                }}
              >
                RESERVAR
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      <ModalStore modal={modalOptions} setModal={setModalOptions} phone={data?.getStoreById.phone} />

    </SafeAreaView>
  );
};

export default Store;

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    height: 50,
    justifyContent: "space-between",
    padding: 10,
    paddingLeft: 20,
    paddingRight: 20,
  },
  header_left: {
    display: "flex",
    flexDirection: "row",
  },
});
