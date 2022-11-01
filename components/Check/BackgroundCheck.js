import { Button, SafeAreaView, StyleSheet, Text, TextInput, View ,TouchableOpacity, Dimensions, KeyboardAvoidingView, ScrollView, Image,} from 'react-native'
import React from 'react'
import { useNavigation, useRoute } from '@react-navigation/native';;
import { useState } from 'react';
import Toast from 'react-native-root-toast';

let state = [{id:1,name:'Osun'},{id:2,name:'Lagos'},{id:3,name:'Ibaadan'},{id:4,name:'Ekiti'}
,{id:5,name:'Abeokuta'},{id:6,name:'Olode'},{id:7,name:'Osogbo'},{id:8,name:'Abuja'},{id:9,name:'Jos'},{id:10,name:'Kaduna'},{id:11,name:'Koji'}
,{id:12,name:'Lokoja'},{id:13,name:'Kwara'},{id:14,name:'Ilorin'},{id:15,name:'Plaetu'},{id:16,name:'Badagry'},{id:17,name:'Abia'}]

const{width,height}=Dimensions.get('window');
const BackgroundCheck = () => {
const [selectedItem, setSelectedItem] = useState(null)
  const onSelect = (item) =>{
    setSelectedItem(item)
  }
  
  const [selected,setSelected]=React.useState("");
  const [focus,setFocus] = useState(false)
  const navigation = useNavigation();

  //TextInput Verification const Declaration
  const [firstName,setFirstName] = useState('')
  const [middleName,setMiddleName] = useState('')
  const [lastName,setLastName] = useState('')
  const [driverLicense,setDriverLicense] = useState('')
  const [states,setStates] = useState('')
  const [socialSecurityNumber,setSocialSecurityNummber] = useState('')

  //Field Validation
  const FieldValidation =()=>{
    if(firstName==="" || middleName==="" || lastName==="" || driverLicense==="" || socialSecurityNumber==="" || states==="" ){
      Toast.show('All fields are required!')
      return false
    }else
    navigation.navigate('Vehicle Info')
      return true
  }



    let config = {
      headers: {
        Authorization: `Token ${authToken}`,
      },
    };

    const driverProfile = await axios.post(
      `${apiUrl}/api/driver/`,
      driverInfo,
       config
    );

    if(driverProfile.data.status === true){
      Toast.show('Driver Created Successfully')
      navigation.navigate("Vehicle Info");
    }else{
      Toast.show(driverProfile.data.status)
    }

    // } else{


    // }
  };

  return (
    <KeyboardAvoidingView>
      <ScrollView style={{backgroundColor:'white'}}>
        <Text style={{fontSize:width*0.06,fontWeight:'bold',marginLeft:'2%',marginBottom:5}}>BackgroundCheck</Text>
      <Text style={{fontWeight:'bold',marginLeft:'2%',fontSize:width*0.04,marginBottom:5}}>We run background check to help keep everyone safe</Text>
      <View style={{marginLeft:'2%',marginRight:'2%'}}>
        <View style={{marginBottom:'4%'}}>
        <Text style={{marginBottom:3.5}}>First name</Text>
        <TextInput 
            placeholder='Samuel'
            style={{
              borderWidth:0,
  backgroundColor:'#D9D9D9', 
  paddingLeft:15,
  padding:6,
  fontSize:width*0.04,
  marginTop:height*0.009,
  marginBottom:height*0.009,
            }}
            onChangeText={(value)=>setFirstName(value)}
        />
        </View>

        <View  style={{marginBottom:'4%'}}>
        <Text style={{marginBottom:3.5}}>Middle name</Text>
        <TextInput 
            placeholder=''
            style={{
              borderWidth:0,
  backgroundColor:'#D9D9D9', 
  paddingLeft:15,
  padding:6,
  fontSize:width*0.04,
  marginTop:height*0.009,
  marginBottom:height*0.009,
            }}
            onChangeText={(value)=>setMiddleName(value)}
            />
        </View>
        <View  style={{marginBottom:'4%'}}>
        <Text style={{marginBottom:3.5}}>Last name</Text>
        <TextInput 
            style={{
              borderWidth:0,
  backgroundColor:'#D9D9D9', 
  paddingLeft:15,
  padding:6,
  fontSize:width*0.04,
  marginTop:height*0.009,
  marginBottom:height*0.009,
            }}
            onChangeText={(value)=>setLastName(value)}
        />
        </View>
        <View  style={{marginBottom:'4%'}}>
        <Text style={{marginBottom:3.5}}>Driver's license number</Text>
        <TextInput 
            placeholder="Driver's license number"
            style={{
              borderWidth:0,
  backgroundColor:'#D9D9D9', 
  paddingLeft:15,
  padding:6,
  fontSize:width*0.04,
  marginTop:height*0.009,
  marginBottom:height*0.009,
            }}
            onChangeText={(value)=>setDriverLicense(value)}
            keyboardType="number-pad"
        />
        </View>
        <View style={{marginBottom:'20%',}}>
         <Text style={{marginBottom:3.5}}>State</Text>
         <TextInput 
            placeholder='States'
            style={{
              borderWidth:0,
  backgroundColor:'#D9D9D9', 
  paddingLeft:15,
  padding:6,
  fontSize:width*0.04,
  marginTop:height*0.009,
  marginBottom:height*0.009,
            }}
            onChangeText={(value)=>setStates(value)}
        />
        
        </View>
        <View >
        <Text style={{marginBottom:3.5}}>Social security number</Text>
        <TextInput 
            placeholder='123-45-6789'
            style={{
              borderWidth:0,
  backgroundColor:'#D9D9D9', 
  paddingLeft:15,
  padding:6,
  fontSize:width*0.04,
  marginTop:height*0.009,
  marginBottom:height*0.009,
            }}
            onChangeText={(value)=>setSocialSecurityNummber(value)}
            keyboardType="number-pad"
        />
        </View>
      </View>
      <View style={{marginTop:'12%'}}>
       <TouchableOpacity onPress={FieldValidation} style={{alignSelf:'center',backgroundColor:'#111AE5',width:width-35,padding:5,height:45,justifyContent:'center'}}><Text style={{color:'white',fontWeight:'bold',alignSelf:'center',fontSize:23}}>CONTINUE</Text></TouchableOpacity>
   </View>
   <View style={{height:10}} />
   </ScrollView>
    </KeyboardAvoidingView>
  )
}

export default BackgroundCheck

const styles = StyleSheet.create({
  FirstNameBorderOnFocus: {
    borderWidth:2,
    backgroundColor:'#D9D9D9', 
    paddingLeft:15,
    padding:6,
    fontSize:width*0.04,
    paddingTop:height*0.009,
    marginBottom:height*0.009,
  },
FirstNameBorderOnBlur:{
  borderWidth:0,
  backgroundColor:'#D9D9D9', 
  paddingLeft:15,
  padding:6,
  fontSize:width*0.04,
  paddingTop:height*0.009,
  marginBottom:height*0.009,
},
MiddleNameBorderOnFocus: {
  borderWidth:2,
  backgroundColor:'#D9D9D9', 
  paddingLeft:15,
  padding:6,
  fontSize:width*0.04,
  paddingTop:height*0.009,
  marginBottom:height*0.009,
},
MiddleNameBorderOnBlur:{
borderWidth:0,
backgroundColor:'#D9D9D9', 
paddingLeft:15,
padding:6,
fontSize:width*0.04,
paddingTop:height*0.009,
marginBottom:height*0.009,
}
})