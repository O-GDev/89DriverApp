import { Image, StyleSheet, Text, View,TouchableOpacity,Dimensions,SafeAreaView } from 'react-native'
import React from 'react'
import { FontAwesome5 } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import { useState } from 'react';
import { useEffect } from 'react';


const {width,height} = Dimensions.get('window');
export function Profile(props) {
  const [clientFirstName, setClientFirstName] = useState('John');
  const [clientSecondName, setClientSecondName] = useState('Walker')
  const [profemail,setProfemail] = useState('email@example.com')
  const [profPhoneNum,setProfPhoneNum] = useState('1234567890')
  const [data, setData] = useState([])

  const navigation = useNavigation();
  return (
<SafeAreaView style={{flex:1,justifyContent:'center',alignContent:'center'}}>

<View style={styles.flex}>
 <View style={{alignSelf:'center'}}>
 <View style={{width:'100%',height:150,justifyContent:'center',marginBottom:10}}>
 <Image source={require('../../assets/john.png')} style={{width:80,height:80}} />
  <View style={{justifyContent:'center',alignItems:'center',marginTop:'1.5%'}}>
  <Text style={{fontWeight:'600'}}>{clientFirstName} {clientSecondName}</Text>
  </View>
  </View>
 </View>
   <View style={{paddingLeft:10,paddingRight:10}}>
   <View style={{borderWidth:1,}} />
   </View>
    <View>
      <Text style={{fontWeight:'bold',padding:19}}>Account Info</Text>
    </View>
    <View style={{flexDirection:'row',padding:19,paddingTop:5}}>
      <View style={{marginTop:3}}><FontAwesome5 name="envelope" color="black" size={25} /></View><View style={{paddingLeft:10}}><Text style={{fontWeight:'bold'}}>Email</Text><Text style={{marginTop:-4}}>{profemail}</Text></View>
      </View>
      <View style={{flexDirection:'row',paddingLeft:19,paddingTop:3}}>
      <View style={{marginTop:7}}>
      <Image source={require('../../assets/phone11.png')} style={{width:25,height:25}} />
      </View>
      <View style={{paddingLeft:10}}><Text style={{fontWeight:'bold'}}>Phone number</Text><Text  style={{}}>{profPhoneNum}</Text></View>
      </View>
    </View>
</SafeAreaView>
  )
}

export default Profile

const styles = StyleSheet.create({
  flex: {
    height:height*0.52,
    backgroundColor: 'white',
    borderRadius:5,
    elevation: 20,
    marginHorizontal: width*0.025,
    borderBottomEndRadius: 15,
    borderBottomStartRadius: 15,
    justifyContent:'center',
    alignContent:'center'
  }
})