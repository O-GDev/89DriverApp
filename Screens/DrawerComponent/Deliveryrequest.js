import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
} from "react-native";
import Strings from "../../utils/Constant/Strings";
import CustomButton from "../../utils/CustomButton";
import GlobalStyle from "../../utils/GlobalStyle";
import { FontAwesome5 } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import { apiUrl } from "../../config";
import { useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Deliveryrequest() {
  const [allRequests, setAllRequests] = useState(null);
  const navigation = useNavigation();

  useEffect(() => {
    const getDriverRequests = async () => {
      const token = await AsyncStorage.getItem("user");
      const authToken = JSON.parse(token);

      let config = {
        headers: {
          Authorization: `Token ${authToken}`,
        },
      };

      const driverRequest = await axios.get(
        `${apiUrl}/api/driverrequest/`,
        config
      );

      if (driverRequest.data.status === true) {
        const requests = driverRequest.data.job;
        setAllRequests(requests);
      }
    };
    getDriverRequests();
  });

  return (
    <SafeAreaView
      style={[
        GlobalStyle.horizontal_center_screen,
        { marginHorizontal: 20, marginVertical: 10 },
      ]}
    >
      {allRequests?.length === 0 ? (
        <View style={{height: 100, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center'}}>
          <Text style={{color: 'lightblue', fontSize: 20, }}>No requests for Now, Check Back Later.</Text>
        </View>
      ) : (
        <ScrollView>
          {allRequests?.map(({ id, resturant_name, delivery_address }) => (
            <TouchableOpacity
              key={id}
              style={[
                GlobalStyle.roundContainer,
                {
                  marginBottom: 10,
                  backgroundColor: "white",
                  shadowColor: "black",
                  shadowRadius: 4.65,
                  height: 200,
                  shadowOffset: {
                    height: 3,
                    width: 0,
                  },
                  shadowOpacity: 20,
                },
              ]}
            >
              <View>
                <Text
                  style={{
                    textAlign: "center",
                    fontWeight: "bold",
                    fontSize: 25,
                  }}
                >
                  {resturant_name}
                </Text>
                <View>
                  <Text style={{ textAlign: "center" }}>
                    {" "}
                    <FontAwesome5
                      name="map-marker-alt"
                      color={"blue"}
                      size={25}
                    />
                  </Text>
                </View>
                <Text
                  style={{ color: "green", fontSize: 15, paddingBottom: 10 }}
                >
                  {delivery_address}
                </Text>
              </View>
              <View style={{ width: "100%" }}>
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate("Deliver", { requestId: id })
                  }
                  style={{
                    alignSelf: "center",
                    backgroundColor: "blue",
                    width: "60%",
                    padding: 10,
                    borderRadius: 30,
                  }}
                >
                  <Text
                    style={{
                      color: "white",
                      fontWeight: "bold",
                      alignSelf: "center",
                      fontSize: 20,
                    }}
                  >
                    Accept Request
                  </Text>
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
      )}
    </SafeAreaView>
  );
}
const Style = StyleSheet.create({
  btn: {},
});
