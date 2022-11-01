import { View, Text, TouchableOpacity,StatusBar,SafeAreaView,Image } from 'react-native'
import React from 'react'
import { FontAwesome5 } from '@expo/vector-icons'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { useNavigation } from '@react-navigation/native';

export default function Del() {
  const navigation = useNavigation();
  return (
    
    <View>
      <StatusBar/>
      <SafeAreaView style={[GlobalStyle.horizontal_center_screen, { backgroundColor: 'white', height: '100%' }]} />
     <View style={{height:200,width:'100%',paddingBottom:15}} >
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
      </View>
      <View style={{paddingBottom:15}}>
      <Text style={{paddingLeft:15,paddingTop:5,fontSize:17,fontWeight:'600',}}>Frozen Food Joint</Text>
          <Text style={{fontSize: 15,paddingLeft:10 }}>
          <FontAwesome5 name='map-marker-alt' color={"blue"} size={30} />
         <Text style={{paddingLeft:3}}> 2324 Murphy Court, East Derry, New Hampshire</Text>
          </Text>
      </View>
          <View>
    
    <View style={{backgroundColor:'black',borderWidth:1}}/>
    <View style={{width:'95%',height:40,alignSelf:'center',justifyContent:'center',}}>
 <View style={{flexDirection:'row',justifyContent:'space-between'}}>
     <Text style={{paddingLeft:10,color:'black'}}>Restaurant Number</Text>
     <Text style={{paddingRight:10,color:'black',fontSize:18}}>1234567890<View style={{paddingLeft:10}}><Image source={require('../../assets/phone.png')} style={{width:15, height:15,tintColor:'blue'}} /></View></Text>
     </View>
     </View>
    <View style={{paddingRight:10,paddingTop:15,paddingBottom:5}}>
         <TouchableOpacity onPress={() => navigation.navigate('Deli')} style={{backgroundColor:'blue',width:'30%',justifyContent:'center',alignSelf:'flex-end',alignContent:'center',height:40,}}><Text style={{justifyContent:'center',color:'white',fontWeight:'600',textAlign:'center',fontSize:18}} >Start</Text></TouchableOpacity>
         </View>
     </View>
    <View style={{backgroundColor:'black',borderWidth:1,}}/>
         </View>
    
  )
}
