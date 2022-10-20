import { Button, StyleSheet, Text, View, TouchableOpacity, Alert } from "react-native";
import React, { useState } from "react";
import PhoneInput from "react-native-phone-number-input";
import { useNavigation } from "@react-navigation/native";
import Toast from "react-native-root-toast";
import axios from "axios";
import { apiUrl } from "../../config";

const Signinheader = ({}) => {
  const navigation = useNavigation();
  const [phone, setPhone] = useState("");
  const [tok, setTok] = useState("");

  const handleSubmit = async () => {

    const signin ={
      phone
    }

    if(!phone.trim()) return  Toast.show("Phone Number is required!");

    try{
       const res = await axios.post(`${apiUrl}/api/verifylogin/`, signin);
      if(res.data.status === false){
        Alert.alert('Error',res.data.detail)
      } else{
        Toast.show(res.data.detail)
        navigation.navigate('SigninOt', {user: signin})
      }
      
    }catch(err){}
  }


 
  return (
    <View style={styles.contains}>
      <View>
        <Text style={{ fontSize: 40, paddingBottom: 50, paddingLeft: 20 }}>
          <Text style={{ fontWeight: "bold" }}>Sign in</Text> with your phone
          number
        </Text>
      </View>
      <View style={{padding: 10}}>
        <PhoneInput
          defaultCode="NG"
          containerStyle={{
            width: "100%",
            borderWidth: 1,
            paddingLeft: 10,
          }}
          defaultValue={phone}
          onChangeFormattedText={(text) => setPhone(text)}
        />
      </View>
      <View style={{ paddingTop: 25 }}>
        <TouchableOpacity
          onPress={handleSubmit}
          style={{
            alignSelf: "center",
            backgroundColor: "blue",
            width: "90%",
            padding: 5,
            borderRadius: 5,
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
            NEXT
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Signinheader;

const styles = StyleSheet.create({});
