import { Button, ImageBackground, StyleSheet, Text, View, Image , TouchableOpacity,Dimensions } from 'react-native'
import React from 'react'
import Signinheader from '../../components/signin/Signinheader'

const {width,height} = Dimensions.get('window');
const Signin = ({ navigation }) => {
  return (
    <ImageBackground source={require('../../assets/sign_bg.png')} style={{height: '100%', }}>
   <View style={{height:height,justifyContent:'center'}}>
   <View style={styles.containers}>
    <Signinheader />
    <View>
    
     
      
    </View>
   </View>
   </View>

   </ImageBackground>
  )
}

export default Signin

const styles = StyleSheet.create({
  containers: {
    height:'45%',
    backgroundColor: 'white',
    borderRadius:5,
    elevation: 20,
    justifyContent:'center',
    alignSelf:'center',
    marginHorizontal: 12,
    borderBottomEndRadius: 15,
    borderBottomStartRadius: 15,
    marginBottom: 40,shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 2,
  }
})