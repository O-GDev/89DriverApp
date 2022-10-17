import { StyleSheet, Text, View,Dimensions } from 'react-native'
import React from 'react'


const {width,height}=Dimensions.get('window');
const HeaderComponent = () => {
  return (
    <View style={{width:width*0.8,justifyContent:'center',alignContent:'center',}}>
  
   <View style={{flexDirection:'row',justifyContent:'space-between',}}>
   <View><Text></Text></View>
   <View style={{alignSelf:'center'}}>
   <Text style={{fontSize:width*0.045}}>Ready to Pickup Foods!</Text>
   </View>
    
      
    <View style={{}}>
    <Text style={{}}></Text>
    </View>  
   </View>
      </View>
  )
}

export default HeaderComponent

const styles = StyleSheet.create({})