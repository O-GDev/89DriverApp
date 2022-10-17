import { Button, SafeAreaView, StatusBar, StyleSheet, Text, View,TouchableOpacity,Dimensions } from 'react-native'
import React from 'react'
import Emailinput from '../../components/signup/Emailinput'
import Existedsignin from '../Existedsignin'

const {width,height}=Dimensions.get('window');
const hlfwidth = (width/2)-(width*0.30);
const SignupScreen = ({ navigation }) => {
  return (
    
    <SafeAreaView style={{height:height,width:width,backgroundColor:'white'}}>
   <View>
   <Emailinput />
   
   </View>
    <View style={{position:'absolute',bottom:20,alignItems:'center',left:hlfwidth}}>
    <Existedsignin/>
    </View>
    </SafeAreaView>
  )
}

export default SignupScreen

const styles = StyleSheet.create({


})