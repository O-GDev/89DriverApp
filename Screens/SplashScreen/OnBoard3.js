import { Image, StyleSheet, Text, View, Pressable,TouchableOpacity, SafeAreaView, Dimensions } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const {width,height}=Dimensions.get('window')
const Onboard3 = () => {
  const navigation = useNavigation();
  return (
  
    <SafeAreaView style={{flex:1,justifyContent:'center',alignContent:'center',height:height,width:width}}>
  
<View style={{}}>
  
<Image source={require('../../assets/onboard3.png')}  />
</View>
<View style={{marginBottom:'5%'}}>
<Text style={{alignSelf:'center',fontWeight:'bold',justifyContent:'center',paddingTop:20,position:'relative',color:'#1b1b1b'}}>Earn Money</Text>
</View>
 <Pressable  style={{alignItems: 'center',backgroundColor:'white',padding:10,position:'absolute', width:'100%',bottom:'10%'}}>
 <TouchableOpacity  onPress={() => navigation.navigate('Location')} style={{alignSelf:'center',backgroundColor:'#2662FA',width:'50%',padding:5,borderRadius:5,position:'relative',height:40,justifyContent:'center'}}><Text style={{color:'white',fontWeight:'bold',alignSelf:'center',fontSize:20}}>GET STARTED</Text></TouchableOpacity>
        </Pressable>
    </SafeAreaView>
      
  )
}

export default Onboard3

const styles = StyleSheet.create({})