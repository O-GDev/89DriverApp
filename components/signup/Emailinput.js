import {
  KeyboardAvoidingView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
  Dimensions,
  Image,
  SafeAreaView,
  TouchableOpacity,
  ToastAndroid,
  Alert,
} from "react-native";
import React, { useState } from "react";
import PhoneInput from "react-native-phone-number-input";
import { useNavigation } from "@react-navigation/native";
import {apiUrl} from '../../config'
import axios from 'axios'
import Toast from "react-native-root-toast";

const { width, height } = Dimensions.get("window");

const Emailinput = ({}) => {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");


  const handleSubmit = async () => {

    const signUp ={
      email,
      phone
    }

    if(!email.trim()) return Alert.alert('Please add email')
    if(!phone.trim()) return Alert.alert('Please add email')

    // navigation.navigate("Verify phone", { phone: phoneNumber })

    try{
       const res = await axios.post(`${apiUrl}/api/verifyinformation/`, signUp);
        if(res.data.status ===true) {
          Toast.show('Otp sent successfully')
          navigation.navigate("Verify phone", { user: signUp })
        }else{
          Alert.alert(res.data.detail, 'Please Sign In')
        }

      
    }catch(err){}
  }
 

  return (
    <SafeAreaView style={{ alignContent: "center", justifyContent: "center" }}>
      <StatusBar />
      <View
        style={{
          alignContent: "center",
          backgroundColor: "white",
          height: height * 0.85,
          width: width * 0.97,
          alignSelf: "center",
          elevation: 10,
          borderTopRightRadius: 15,
          borderTopLeftRadius: 15,
          shadowColor: "black",
          shadowOffset: { height: 2, width: 0 },
          shadowOpacity: 0.5,
        }}
      >
        <View style={styles.container}>
          <Text
            style={{
              marginLeft: "1.5%",
              marginTop: "3%",
              fontSize: height * 0.06,
              paddingLeft: 15,
            }}
          >
            <Text style={{ color: "white", fontWeight: "bold" }}>Sign up</Text>
            <Text style={{ color: "white", fontSize: height * 0.05 }}>
              with
            </Text>
            <Text style={{ color: "white", fontSize: height * 0.05 }}>
              {" "}
              email and phone
            </Text>{" "}
            <Text style={{ color: "white", fontSize: 40 }}>number</Text>
          </Text>
        </View>
        <View
          style={{ width: width * 0.95, alignSelf: "center", marginTop: "3%" }}
        >
          <View style={styles.signupinput}>
            <View style={{ marginBottom: 0 }}>
              <TextInput
                placeholder="example@email.com"
                onChangeText={(value) => setEmail(value)}
                style={{
                  borderWidth: 1,
                  borderRadius: 10,
                  paddingLeft: 10,
                  height: 40,
                }}
                textContentType="emailAddress"
              />
            </View>
            <View style={styles.phonesignup}>
              <View style={{ paddingTop: 10 }}>
                <PhoneInput
                  defaultCode='NG'
                 
                  containerStyle={{
                    width: '100%',
                    borderWidth: 1,
                    borderRadius: 10,
                    paddingLeft: 10,
                    
                  }}
                  defaultValue={phone}
                  onChangeFormattedText={(text) => setPhone(text)}
                />
              </View>
            </View>
          </View>
          <View style={styles.condition}>
            <Text
              style={{
                color: "#00000099",
                fontSize: width * 0.04,
                fontStyle: "normal",
              }}
            >
              By proceeding, you consent to get calls, whatsapp
            </Text>
            <Text
              style={{
                color: "#00000099",
                fontSize: width * 0.04,
                fontStyle: "normal",
              }}
            >
              or SMS messages, including by automated means,{" "}
            </Text>
            <Text
              style={{
                color: "#00000099",
                fontSize: width * 0.04,
                fontStyle: "normal",
              }}
            >
              from {"Appname"} and its affiliates to the number{" "}
            </Text>
            <Text
              style={{
                color: "#00000099",
                fontSize: width * 0.04,
                fontStyle: "normal",
              }}
            >
              provided
            </Text>
          </View>
          <View style={[{ flexDirection: "row" }, styles.signinwith]}>
            <View
              style={{
                backgroundColor: "black",
                height: 2,
                flex: 1,
                alignSelf: "center",
              }}
            />
            <Text
              style={{
                alignSelf: "center",
                fontSize: 14,
                marginLeft: "2%",
                marginRight: "2%",
              }}
            >
              or sign up with
            </Text>
            <View
              style={{
                backgroundColor: "black",
                height: 2,
                flex: 1,
                alignSelf: "center",
              }}
            />
          </View>
          <View
            style={{
              justifyContent: "space-evenly",
              flexDirection: "row",
              height: 65,
              marginBottom: "1.5%",
              marginTop: "1.5%",
            }}
          >
            <Text>
              <Image
                source={require("../../assets/google.png")}
                style={{ height: 50, width: 70 }}
              />
            </Text>
            <Text>
              <Image
                source={require("../../assets/facebook.png")}
                style={{ height: 50, width: 70 }}
              />
            </Text>
            <Text>
              <Image
                source={require("../../assets/apple.png")}
                style={{ height: 50, width: 70 }}
              />
            </Text>
          </View>
        </View>
        <View style={{ marginTop: "9%", marginBottom: "1%" }}>
          <TouchableOpacity
            onPress={handleSubmit}
            style={{
              alignSelf: "center",
              backgroundColor: "#111AE5",
              width: "90%",
              padding: 5,
              borderRadius: 5,
              height: 35,
              justifyContent: "center",
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
              SIGN UP
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Emailinput;

const styles = StyleSheet.create({
  signupinput: {
    marginTop: "1.2%",
    marginBottom: "2.0%",
    marginLeft: "1.5%",
  },

  signinwith: {},
  condition: {
    margin: "1.5%",
    width: width * 0.9,
  },
  container: {
    flex: 1,
    height: height * 0.4,
    backgroundColor: "blue",
    borderTopEndRadius: 15,
    borderTopStartRadius: 15,
    marginTop: 5,
  },
  contain: {
    //  elevation: 2,
    //  marginTop: 10,
    //  marginHorizontal: 5,
    //  height:'83%',
    borderBottomEndRadius: 15,
    borderBottomStartRadius: 15,
    //  marginBottom: 40,
    width: "99%",
    alignSelf: "center",
    backgroundColor: "white",
    height: height,
    shadowOffset: {},
    shadowOpacity: 2,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
});
