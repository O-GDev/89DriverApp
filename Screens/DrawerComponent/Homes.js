import { Image, StyleSheet, Text, View, Switch, Pressable,Dimensions } from 'react-native'
import React from 'react'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { FontAwesome5 } from '@expo/vector-icons';
import { useState } from 'react';


const {width,height}=Dimensions.get('window')
const Homes = () => {
  const[isEnabled,setIsEnabled]=useState(false)
  const[enable,setEnable] = useState('You are offline')



  const toggleSwitch = () =>{
    setIsEnabled(previousState => !previousState)
    if (isEnabled === true){
      setEnable('You are offline')
    }else
    setEnable('You are online')
  }


  return (
    <>
      <MapView
    style={{ flex: 1 }}
    provider={PROVIDER_GOOGLE}
    showsUserLocation
    initialRegion={{
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421}}
 />
<Pressable style={{
            flexDirection: 'row', backgroundColor: "blue",
            borderTopRightRadius: 20, borderTopLeftRadius: 20,
            height:50, alignItems: 'center',
          }}>
            <FontAwesome5 color={"white"} name="bell" size={30}
              style={{ flex: 1, marginStart: 22, }}
            />
          
            <Text style={{ flex: 1, alignSelf: 'center', color: 'white', fontSize: 17, marginLeft:-60}}>
              {enable}</Text>
           
         <View><Switch style={{ flex: 1, marginTop:15 }} onValueChange={toggleSwitch} value={isEnabled} /></View>
          </Pressable>
    </>
    
  )
}

export default Homes

const styles = StyleSheet.create({})