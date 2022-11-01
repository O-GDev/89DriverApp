import { StyleSheet, Text, View, Alert,Image, SafeAreaView, StatusBar } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { FontAwesome5 } from '@expo/vector-icons';
import AsyncStorage from "@react-native-async-storage/async-storage";

const Settings = () => {
  const navigation = useNavigation();
    const logoutUser = async () => {
      await AsyncStorage.removeItem('expiryDate')
      await AsyncStorage.removeItem('user');
      const user = await AsyncStorage.getItem('user')
     if(user ===null){
      navigation.navigate('Sign In') 
     }
    }

  const Logout = () => {
    Alert.alert(
      "Logout",
      "Do you Really wants to logout?",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "Logout", onPress: () => logoutUser()}
      ]
    );
  }
  return (
    
    <SafeAreaView style={{backgroundColor:'white',height:'100%'}}>
  <StatusBar/>
  <View style={{}}>
  {/* <View style={{padding:10}}><Text> <Text style={{padding:15}}><Image source={require('../../assets/manageaccount.png')} style={{width:20,height:20}} /></Text> <Text style={{fontWeight:'400',fontSize:17,}} onPress={() => navigation.navigate('mannageaccount')}>Manage Account</Text></Text></View>
    <View style={{borderWidth:0.25,backgroundColor:'black',}} /> */}
    <View style={{padding:10}}><Text><Text style={{padding:15}}><Image source={require('../../assets/share.png')} style={{width:20,height:20}} /></Text>  <Text style={{fontWeight:'400',fontSize:17,}}>Share</Text></Text></View>
    <View style={{borderWidth:0.25,backgroundColor:'black',paddingRight:10}} />
    <View style={{padding:10}}><Text> <Text style={{padding:15,paddingRight:10}}><Image source={require('../../assets/privacypolicy1.png')} style={{width:20,height:20,}} /></Text> <Text style={{fontWeight:'400',fontSize:17,}}>Privacy Policy</Text></Text></View>
    <View style={{borderWidth:0.25,backgroundColor:'black',}} />
    <View style={{padding:10}}><Text><Text style={{padding:15,}}><Image source={require('../../assets/privacypolicy2.png')} style={{width:20,height:20,}} /></Text>  <Text style={{fontWeight:'400',fontSize:17}}>Privacy Policy</Text></Text></View>
    <View style={{borderWidth:0.25,backgroundColor:'black',}} />
    <View style={{padding:10}}><Text> <Text style={{padding:15}}><Image source={require('../../assets/logout.png')} style={{width:20,height:20}} /></Text> <Text style={{fontWeight:'400',fontSize:17}} onPress={Logout} >Logout</Text></Text></View>
     
  </View>
    </SafeAreaView>

  )
}

export default Settings

const styles = StyleSheet.create({})
