import { View, Text, TouchableOpacity, Alert, Modal, Image, SafeAreaView,Dimensions } from 'react-native'
import React from 'react'
import { FontAwesome5 } from '@expo/vector-icons'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'
import { useState } from 'react'


const{width,height} = Dimensions.get('window')
export default function Deli() {
  const[name,setName]=useState('');
  const[submitted,setSubmitted]=useState(false)
  const[showWarning,setshowWarning]=useState(false)
  const onPressHandler = () => {
    if (name.length > 3) {
      setSubmitted(!submitted);
    }else{
      setshowWarning(true)
    }
  }
  return (
    <View>
    <SafeAreaView/>
    <Modal
    visible={showWarning}
    transparent
    onRequestClose={
      () => setshowWarning(false)
    }
    >
    <View style={{justifyContent:'center',height:height}}>
    <View style={{backgroundColor:'white',width:width*0.9,height:300,alignSelf:'center',elevation:100}}>
    <View style={{paddingBottom:30,justifyContent:'center',alignSelf:'center',paddingTop:15}}>
      <Image source={require('../../assets/R.png')} style={{width:60, height:60,}} />
    </View>
    <Text style={{paddingLeft:20,fontSize:20,paddingBottom:10}}>Pickup Completed don't forget to collect your tips from the reciever</Text>
   <View style={{backgroundColor:'black',borderWidth:1,width:'90%',alignSelf:'center'}}/>
   <Text style={{paddingLeft:20,fontSize:20,paddingTop:10,paddingBottom:25}}>Your 890 Km is reading payment will be made on weekend. Thanks</Text>
    <Text style={{alignSelf:'flex-end',paddingRight:15,color:'blue',fontSize:17,fontWeight:'600'}}>Ok</Text>
    </View>
    </View>
    </Modal>
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
         <Text style={{paddingLeft:3}}>2324 Murphy Court, East Derry, New Hampshire</Text> 
          </Text>
      </View>
          <View style={{paddingBottom:10,}}>
    
    <View style={{backgroundColor:'black',borderWidth:1}}/>
    <View style={{width:'95%',height:40,alignSelf:'center',justifyContent:'center',}}>
 <View style={{flexDirection:'row',justifyContent:'space-between',paddingBottom:15}}>
     <Text style={{paddingLeft:10,color:'black',fontSize:15}}>Restaurant Number</Text>
     <Text style={{paddingRight:10,color:'black',fontSize:18}}>1234567890<View style={{paddingLeft:10}}><Image source={require('../../assets/phone.png')} style={{width:15, height:15,tintColor:'blue'}} /></View></Text>
     </View>
     </View>
     <View style={{width:'95%',height:40,alignSelf:'center',justifyContent:'center',}}>
     <View style={{flexDirection:'row',justifyContent:'flex-end'}}>
     <View >
      <TouchableOpacity onPress={onPressHandler} style={{backgroundColor:'blue',padding:10,paddingLeft:25,paddingRight:25}}><Text style={{justifyContent:'center',color:'white',fontWeight:'600',textAlign:'center',fontSize:18}} >Deliver</Text></TouchableOpacity>  
     </View>
     <View style={{paddingLeft:10}}>
      <TouchableOpacity  style={{backgroundColor:'blue',padding:10,paddingLeft:30,paddingRight:30}}><Text style={{justifyContent:'center',color:'white',fontWeight:'600',textAlign:'center',fontSize:18}} >Start</Text></TouchableOpacity>  
     </View>
     </View>
   </View>
     </View>
     
   <View style={{backgroundColor:'black',borderWidth:1,}}/>
    </View>
    
  )
}