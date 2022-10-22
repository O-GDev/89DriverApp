import React from "react";
import { useEffect } from "react";
import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  Image,
  StyleSheet,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import { apiUrl } from "../../config";
import GlobalStyle from "../../utils/GlobalStyle";
import { useState } from "react";

export default function DeliveryHistory() {
  const navigation = useNavigation();
  const [history, setHistory] = useState(null)
  useEffect(() => {
    const getDeliveryHistory = async () => {
      const token = await AsyncStorage.getItem("user");
      const authToken = JSON.parse(token);

      let config = {
        headers: {
          Authorization: `Token ${authToken}`,
        },
      };

      const deliveryHistory = await axios.get(
        `${apiUrl}/api/drivercompleted/`,
        config
      );
      const requestStatus = deliveryHistory.data.status;
      const requests = deliveryHistory.data.job;
      
      if(requestStatus === true){
        setHistory(requests)
      }
      ;
    };
    getDeliveryHistory();
  });

  return (
    <ScrollView>
      <SafeAreaView
        style={[
          GlobalStyle.horizontal_center_screen,
          { backgroundColor: "white", paddingHorizontal: 20 },
        ]}
      >
      {
        history?.length ===0 ? (
          <View>
            <Text>Nothing to Show</Text>
          </View>
        ) :  (
          history?.map(({id, delivery_address, resturant_name, status}) => (
            <View style={[Style.box]} key={id}>
            <Image
              source={require("../../assets/maps/small_map.png")}
              style={{ height: 80, width: "100%" }}
            />
            <View style={[GlobalStyle.horizontal_view, Style.text_row]}>
              <Text style={Style.text}>{resturant_name}</Text>
              <Text style={Style.text}>7KM</Text>
            </View>
            <View style={[GlobalStyle.horizontal_view, Style.text_row]}>
              <Text style={Style.text}>24 Jun 2022 at 11:54 PM</Text>
              <Text style={Style.text}>{status}</Text>
            </View>
          </View>
          ))
        )
      }
      </SafeAreaView>
    </ScrollView>
  );
}

const Style = StyleSheet.create({
  btn: {
    height: 30,
  },
  box: {
    backgroundColor: "white",
    minHeight: 120,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
  },
  text: {
    fontSize: 14,
    fontWeight: "bold",
  },
  text_row: {
    width: "100%",
    flex: 1,
    justifyContent: "space-between",
    paddingHorizontal: 3,
  },
});
