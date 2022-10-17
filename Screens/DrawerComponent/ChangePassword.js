import { Image, StyleSheet, Text, View,TouchableOpacity, TextInput, Pressable } from 'react-native'
import React,{ useState } from 'react'
import { FontAwesome5 } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import { MaterialCommunityIcons } from '@expo/vector-icons'



const ChangePassword = () => {
  const navigation = useNavigation();
  const [passwordVisible,setPasswordVisible] = useState(true);
  const [rightIcon,setRightIcon] = useState('eye')

  const handlePasswordVisibility =()=>{
    if(rightIcon === 'eye'){
      setRightIcon('eye-off');
      setPasswordVisible(!passwordVisible);
    }else if (rightIcon ==='eye-off'){
      setRightIcon('eye');
      setPasswordVisible(!passwordVisible);
    }
  };
    
  return (
<View>
<View style={styles.flex}>
 

    
<View style={{flexDirection:'row',justifyContent:'space-between',paddingTop:30,borderBottomWidth:2,width:'95%',alignSelf:'center'}}>


<TextInput style={{width:'85%'}} placeholder='Current Password' secureTextEntry={passwordVisible}

 />
  <Pressable onPress={handlePasswordVisibility}  style={{}}>
    <MaterialCommunityIcons name={rightIcon} size={20} color="#232323" />
   </Pressable>
  
   
</View>
  <View style={{flexDirection:'row',justifyContent:'space-between',paddingTop:30,borderBottomWidth:2,width:'95%',alignSelf:'center'}}>


<TextInput style={{width:'85%'}} placeholder='New Password' secureTextEntry={passwordVisible}

 />
  <Pressable onPress={handlePasswordVisibility}  style={{}}>
    <MaterialCommunityIcons name={rightIcon} size={20} color="#232323" />
   </Pressable>
  
   
</View>
<View style={{flexDirection:'row',justifyContent:'space-between',paddingTop:30,borderBottomWidth:2,width:'95%',alignSelf:'center'}}>


<TextInput style={{width:'85%'}} placeholder='Confirm Password' secureTextEntry={passwordVisible}

 />
  <Pressable onPress={handlePasswordVisibility}  style={{}}>
    <MaterialCommunityIcons name={rightIcon} size={20} color="#232323" />
   </Pressable>
  
   
</View>
      <View style={{paddingTop:50  }}>

<TouchableOpacity onPress={() => ('')} style={{alignSelf:'center',backgroundColor:'blue',width:'80%',padding:5,borderRadius:5,}}><Text style={{color:'white',fontWeight:'bold',alignSelf:'center',fontSize:20}}>Save</Text></TouchableOpacity>

 </View>
    </View>
</View>
  )
}

export default ChangePassword

const styles = StyleSheet.create({
  flex: {
    height:'65%',
    backgroundColor: 'white',
    borderRadius:5,
    elevation: 20,
    marginTop: 130,
    marginHorizontal: 12,
    borderBottomEndRadius: 15,
    borderBottomStartRadius: 15,
    marginBottom: 40,
    justifyContent:'center'
  }
})