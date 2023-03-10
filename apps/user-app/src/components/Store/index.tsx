import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  Share,
  TouchableOpacity,
} from "react-native";
import Modal from "react-native-modal";
import {A} from "@expo/html-elements"
import { Linking } from 'react-native';
import { IStore } from "../../types";
import ModalStore from "../ModalStore";

const Store = ({ uuid, name, type, photos, phone, navigation }: any) => {
  const [modal, setModal] = useState(false);
  const [bookmark, setBookmark] = useState(false);
  const [star, setStar] = useState(false);

  const shareStore = async () => {
    try {
      await Share.share({
        message: `En partiaf ${name}`,
      });
    } catch (error: any) {
      alert(error.message);
    }
  };
  return (
    <View
      style={{
        marginBottom: 10,
        borderBottomWidth: 1,
        borderColor: "rgba(0,0,0,0.1)",
        paddingBottom: 15,
      }}
    >
      <View style={styles.header}>
        <View>
          <Text style={{ fontWeight: "900", fontSize: 18 }}>
            {name} -{" "}
            <Text
              style={{
                fontWeight: "500",
                color: "rgba(0,0,0, 0.5)",
                fontSize: 14,
              }}
            >
              {type}
            </Text>
          </Text>
          <Text style={{ fontWeight: "500", color: "rgba(0,0,0,.3)" }}>
            Santa Marta, Colombia
          </Text>
        </View>

        <TouchableOpacity style={styles.dots} onPress={() => setModal(true)}>
          <View style={styles.dot}></View>
          <View style={styles.dot}></View>
          <View style={styles.dot}></View>
        </TouchableOpacity>
      </View>
      <View style={{ display: "flex", alignItems: "center" }}>
        <Image
          source={{ uri: photos[0] }}
          style={{
            marginTop: 10,
            width: "100%",
            resizeMode: "cover",
            height: 500,
          }}
        />
      </View>
      <View
        style={{
          display: "flex",
          marginTop: 8,
          marginLeft: 20,
          marginRight: 20,
          alignItems: "center",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            marginRight: 10,
          }}
        >
          <TouchableOpacity
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              marginRight: 15,
            }}
            onPress={() => setStar(!star)}
          >
            {star ? (
            <Ionicons name="ios-star" style={{ fontSize: 27, color:'#FFE243' }} />
            ): 
            <Ionicons name="ios-star-outline" style={{ fontSize: 27 }} />
            }
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              marginRight: 15,
            }}
            
            onPress={() => navigation.navigate("Comments", { store: uuid })}
          >
            <Ionicons name="ios-chatbubbles-outline" style={{ fontSize: 27 }} />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              marginRight: 15,
            }}
            onPress={shareStore}
          >
            <Ionicons name="ios-share-outline" style={{ fontSize: 27 }} />
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
          onPress={() => setBookmark(!bookmark)}
        >
          {bookmark ? (
          <Ionicons name="ios-bookmark" style={{ fontSize: 27 }} />
            
          ): (
          <Ionicons name="ios-bookmark-outline" style={{ fontSize: 27 }} />
          )}
        </TouchableOpacity>
      </View>

      <ModalStore modal={modal} setModal={setModal} phone={phone} />

    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    height: 50,
    justifyContent: "space-between",
    padding: 15,
    paddingLeft: 20,
    paddingRight: 20,
  },
  tabItem: {
    width: 60,
  },
  tabBarText: {
    fonstSize: 10,
    fontWeight: "700",
  },
  actionsButton: {
    width: 40,
    height: 40,
    backgroundColor: "blue",
    borderRadius: 21,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  dots: {
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-end",
    flexDirection: "column",
    width: 100,
    height: 70,
    marginTop: -19,
    marginRight: -19,
    paddingRight: 20
  },
  dot: {
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    height: 3,
    width: 3,
    borderRadius: 50,
    marginBottom: 4,
  },
});

export default Store;
