import { Alert, Button, Image, StyleSheet, Text, View, Pressable, TouchableOpacity,Dimensions,SafeAreaView, StatusBar } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';




const {width,height}=Dimensions.get('window');

const Locations = () => {

  



  
  const navigation = useNavigation();
  const enableLocation = () => {
    Alert.alert(
      "Access Location",
      "Allow App to access device Location",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "Yes",  onPress: () =>  navigation.navigate('Sign Up')
       }
      ]
    );
  }
  
  return (
    <SafeAreaView style={{flex:1,justifyContent:'center',alignContent:'center',width:width,height:height,backgroundColor:'white'}}>
    <StatusBar />
    <View style={{backgroundColor:'white'}}>
    <View style={{height:height*0.1}} />
    <View style={{justifyContent:'center',alignItems:'center'}}>
      <Image source={require('../assets/enable_location.png')} style={{}} />
      </View>
      <Text style={{textAlign:'center',fontWeight:'500',fontSize:height*0.035,paddingTop:30}}>Enable Your Location</Text>
      <Text style={{textAlign:'center',paddingTop:20,fontSize:height*0.025,paddingBottom:20,marginLeft:'2%',marginRight:'2%'}}>Let <Text style={{textAlign:'center',fontWeight:'500',color:'blue',}}>89driver</Text> access your location to start find the request around you</Text>
    </View>
    <View style={{backgroundColor:'white',height:170}}>
    <View style={{backgroundColor:'white',padding:20}}>
      <TouchableOpacity onPress={enableLocation} style={{alignSelf:'center',backgroundColor:'#2662FA',width:'60%',padding:10,borderRadius:5,}}><Text style={{color:'white',fontWeight:'bold',alignSelf:'center',position:'relative',}}>USE MY LOCATION</Text></TouchableOpacity>
    </View>
    <Pressable onPress={() => navigation.navigate('Sign Up')} style={{alignItems: 'center',backgroundColor:'white',padding:10,position:'relative', }}>
          <Text style={{ fontSize:16, color:'#999'}}>Skip for now</Text>
        </Pressable>
    </View>
      </SafeAreaView>
  )
}

export default Locations

const styles = StyleSheet.create({
  
})