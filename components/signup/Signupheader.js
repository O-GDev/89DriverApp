import { StyleSheet, Text, View, Dimensions,SafeAreaView } from 'react-native'
import React from 'react'


const {width,height}=Dimensions.get('window');

const Signupheader = () => {
  return (
  <SafeAreaView >
    <View style={styles.container}>
          <Text style={{ marginLeft:'1.5%',marginTop:'1.5%',fontSize:height*0.06}}>
          <Text style={{ color: 'white',fontWeight: 'bold' }}>
          Sign  up   
          </Text>
          <Text style={{ color: 'white', fontSize: height*0.05 }}>  with                                          </Text>
        
          <Text style={{ color: 'white', fontSize: height*0.05 }}> email and phone</Text> <Text style={{ color: 'white', fontSize: 40 }}>                 number</Text>
             </Text>
      </View>
  </SafeAreaView>
  )
}

export default Signupheader

const styles = StyleSheet.create({
    container:{
        height:height*0.27,
        backgroundColor: '#111AE5',
        borderTopRightRadius:20,
        borderTopLeftRadius: 20,
        alignSelf:'center',
        width:width*0.97,
        flexDirection:'column'
    }
})