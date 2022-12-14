import { useState } from "react";
import { StyleSheet, Text, View, Pressable, Keyboard, SafeAreaView,Dimensions,TouchableOpacity, Alert } from 'react-native'
import React from 'react'
import Otpinputfield from './Otpinputfield'
import Otpfinals from "./Otpfinals";
import { useNavigation, useRoute } from "@react-navigation/native";
import Toast from "react-native-root-toast";



const {width,height}=Dimensions.get('window')
const SigninOt = ({emailName,phoneNumber}) => {
  const [otpCode, setOTPCode] = useState("");
  const [isPinReady, setIsPinReady] = useState(false);
  const maximumCodeLength = 4;
  const navigation = useNavigation()
  const route = useRoute();
  

<<<<<<< HEAD
  const login = async () => {
    const newDetails = {
      otp: otpCode,
      phone: user.phone,
    };
    // Alert.alert(newDetails.otpCode)
    const loginResponse = await axios.post(`${apiUrl}/api/login/`, newDetails);    
    if (loginResponse.status === 200) {
      Toast.show('Sign In Success')
      const token = loginResponse.data.token;
      const expiry = loginResponse.data.expiry;
      await AsyncStorage.setItem("user", JSON.stringify(token));
      await AsyncStorage.setItem("expiryDate", JSON.stringify(expiry));
      const loginStatus = loginResponse.data.user.first_login
      if(loginStatus === true){
        navigation.navigate('Background Check')
      } else{
        await AsyncStorage.setItem('loginStatus', JSON.stringify(loginStatus))
        navigation.navigate('Home')

      }    
     
    }
  };
=======
>>>>>>> 2102a9554670b747e8c08fe4251e051bf4adce28

  const ValidateOtp = () => {
    if (otpCode===""){
      Alert.alert("Confirm it's you", 'Pls enter the OTP code sent to 123456790', [{
        text: "Didn't recieve a code? ",
        onPress: () => console.log("Didn't recieve a code"),
        style: "cancel"
        },
      {
        text: "OK"
      }
    ]
      )
      return false
    }else{
      navigation.navigate('Background Check',{
       
      })
      return true
    }
  }


   return (
     <SafeAreaView style={{}}>
    
       <View >
       <Text style={{textAlign:'center',paddingTop:20,fontSize:16,paddingBottom:20}}>code is sent to {route.params.phone}</Text> 
       <Text style={{paddingBottom:20,textAlign:'center',alignSelf:'center'}}>
  
       <Otpinputfield 
         code={otpCode}
        setCode={setOTPCode}
        maximumLength={maximumCodeLength}
        setIsPinReady={setIsPinReady}
        style={{}}
        KeyboardType="phone-pad"
       />
     
       </Text>
       <View>
       <View style={{paddingBottom:10,paddingTop:20}}><Text style={{textAlign:'center'}}><Text style={{color:'#828283'}}>Didn't get a code?</Text><Text> Request Again</Text></Text></View>
       <View style={{}}><Text style={{textAlign:'center'}}>Get via call</Text></View>
       </View>
       <View style={{position:'relative'}}>
       <View style={{flex:1,marginTop:width*0.2}}>
     <TouchableOpacity onPress={ValidateOtp} style={{alignSelf:'center',backgroundColor:'#111AE5',width:'85%',padding:5,borderRadius:100,height:50,justifyContent:'center'}}><Text style={{color:'white',fontWeight:'bold',alignSelf:'center',fontSize:20}}>Verify now</Text></TouchableOpacity>
     </View>
     </View>
          </View>
        </SafeAreaView>
  )
}

export default SigninOt

const styles = StyleSheet.create({
  otp:{
    justifyContent:'center',
    
  }
})