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
import { useStoreById } from "../../hooks/stores/useStoreById";

const screenHeight = Dimensions.get("screen").height;

const Store = ({ route, navigation }: any) => {
//   const insets = useSafeAreaInsets();
//   const [options, setOptions] = useState(false);
//   const [report, setReport] = useState(false);
//   const { isLoading, store } = useStoreById(route.params.store);

//   const sendReport = () => {
//     Alert.alert("Reportar Negocio", "Establecimiento reportado correctamente");
//     setReport(false);
//     setOptions(false);
//   };

//   const sendWhatsAppMessage = async () => {
//     await Linking.openURL(
//       `http://api.whatsapp.com/send?phone=57${data?.getStoreById?.phone}` +
//       "Quisiera hablar con alguien"
//     );
//   };

//   const sendToLocation = async () => {
//     await Linking.openURL(
//       `https://www.google.com/maps/search/${data?.getStoreById?.name}/@6.2499801,-75.6705568,13z?entry=ttu`
//     );
//   };

//   const handlerReport = () => {
//     setOptions(false);
//     setReport(true);
//   }
  return (
    <DefaultView>
        <Text>
        </Text>
    </DefaultView>
  
  );
}

export default Store;
