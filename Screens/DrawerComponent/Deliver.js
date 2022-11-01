import { View, Text, TouchableOpacity,StatusBar,SafeAreaView,FlatList } from 'react-native'
import React from 'react'
import { FontAwesome5 } from '@expo/vector-icons'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { useNavigation } from '@react-navigation/native';

export default function Deliver() {
  const navigation = useNavigation();
  return (
    
    <View>
      <StatusBar/>
      <SafeAreaView style={[GlobalStyle.horizontal_center_screen, { backgroundColor: 'white', height: '100%' }]} />
     <View style={{height:200,width:'100%'}} >
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
      <Text style={{paddingLeft:15,paddingTop:15,fontSize:17,fontWeight:'600'}}>Frozen Food Joint</Text>
          <Text style={{fontSize: 15,paddingLeft:15 }}>
          <FontAwesome5 name='map-marker-alt' color={"blue"} size={30} />
          2324 Murphy Court, East Derry, New Hampshire
          </Text>
         <View style={{paddingRight:10,paddingTop:15,flexDirection:'row',justifyContent:'flex-end'}}>
         <TouchableOpacity onPress={() => navigation.navigate('Home')} style={{backgroundColor:'blue',borderRadius:25,width:'40%',justifyContent:'center',alignSelf:'flex-end',alignContent:'center',height:40,}}><Text style={{justifyContent:'center',color:'white',fontWeight:'600',textAlign:'center',fontSize:18}} >reject request</Text></TouchableOpacity>
         <View style={{borderWidth:4,color:'white',opacity:0}}/>
         <TouchableOpacity onPress={() => navigation.navigate('Del')} style={{backgroundColor:'blue',borderRadius:25,width:'40%',justifyContent:'center',alignSelf:'flex-end',alignContent:'center',height:40,}}><Text style={{justifyContent:'center',color:'white',fontWeight:'600',textAlign:'center',fontSize:18}} >accept request</Text></TouchableOpacity>
         </View>
         </View>
    
  )
}
