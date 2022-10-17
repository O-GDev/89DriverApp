import { Button, StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React,{useState} from 'react'
import PhoneInput from 'react-native-phone-input'
import { useNavigation } from '@react-navigation/native'
import Toast from 'react-native-root-toast'

const Signinheader = ({ }) => {
  const navigation = useNavigation();
  const [phoneNumber, setPhoneNumber] = useState('')
  const [tok, setTok] = useState('')
  

  const handleSignin = async () => {
    try {
      let response = await fetch(
        'https://driver86.herokuapp.com/api/verifylogin/',{
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            'phone': phoneNumber,
            
          })
        
        }
      );
      let json = await response.json();
      
      // navigation.navigate('Verify phone',{
      //   phone: phoneNumber,
      //   email: emailName
      //  })
      if (json.status === true) {
        navigation.navigate('SigninOt',{
          phone: phoneNumber,
          token: tok
          // email: emailName
         })
         console.log('successful')
         console.log(json)
         return true
      }else{
        
      console.log(json)
      Toast.show('Seems you dont have an account,Pls sign up')
      return false
    
      }
      //  console.log(phoneNumber)
      return json;
    } 
    catch (error) {
      // Toast.show('Kindly input your correct details')
       console.error(error);
    }
    
  };


  const phone_Viladate = () =>{
    if(phoneNumber===""){
      Toast.show('Phone Number is required!')
      return false
    }else
      handleSignin()
    return true
  }
  return (
    <View style={styles.contains}>
    <View>
      <Text style={{fontSize:40, paddingBottom: 50,paddingLeft:20}}><Text style={{fontWeight:'bold'}}>Sign in</Text> with your phone number</Text>
    </View>
    <View style={{}}>
    <PhoneInput 
        initialCountry='us'
        style={{borderWidth:1,borderRadius:10,paddingLeft:10,height:40,backgroundColor:'#e8e8e8',width:'90%',alignSelf:'center'}}
        flagStyle={{}}
        // onChangeText={e=>setPhoneNumber(e)}
        // value={phoneNumber}
        onChangePhoneNumber={(value)=>setPhoneNumber(value)}
        />
    </View>
    <View style={{paddingTop:25}}>
    <TouchableOpacity onPress={phone_Viladate} style={{alignSelf:'center',backgroundColor:'blue',width:'90%',padding:5,borderRadius:5,}}><Text style={{color:'white',fontWeight:'bold',alignSelf:'center',fontSize:20}}>NEXT</Text></TouchableOpacity>
    </View>
    </View>
  )
}

export default Signinheader

const styles = StyleSheet.create({
  
})