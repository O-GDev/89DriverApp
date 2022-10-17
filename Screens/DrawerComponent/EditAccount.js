import { Image, StyleSheet, Text, View,TouchableOpacity, TextInput, SafeAreaView,Dimensions, KeyboardAvoidingView, ScrollView } from 'react-native'
import React from 'react'
import { FontAwesome5 } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'


const {width,height}=Dimensions.get('window');
const EditAccount = () => {
  const navigation = useNavigation();
  return (
<KeyboardAvoidingView>
  <ScrollView>
  <View style={{}}>
<View style={styles.flex}>
<View style={{alignSelf:'center'}}>
 <View style={{width:'100%',height:140,justifyContent:'center'}}>
 <Image source={require('../../assets/john.png')} style={{width:80,height:80}} />
  </View>
 </View>
<View style={{marginHorizontal:'4%'}}>
<View style={{flexDirection:'row',justifyContent:'space-evenly',paddingTop:15}}>
<View style={{}}>
<Image source={require('../../assets/profile.png')} style={{width:20,height:20}} />
</View>
<View style={{width:'40%',paddingTop:-5}}>
   <TextInput style={{borderBottomWidth:2}}/>
   </View>
   <View style={{width:'40%',paddingTop:-5}}>
   <TextInput style={{borderBottomWidth:2}}/>
   </View>
</View>
    
<View style={{flexDirection:'row',justifyContent:'space-evenly',paddingTop:30}}>
<View style={{}}>
<FontAwesome5 name="envelope" color="black" size={20} />
</View>
<View style={{width:'83%',paddingTop:-5}}>
<TextInput style={{borderBottomWidth:2}}/>
   </View>
  
</View>
    <View style={{flexDirection:'row',justifyContent:'space-evenly',paddingTop:30,alignContent:'center'}}>
<View style={{}}>
<Image source={require('../../assets/phone.png')} style={{width:20,height:20}} />
</View>
<View style={{width:'83%',paddingBottom:25}}>
<TextInput style={{borderBottomWidth:2}}/>
   
   </View>
  
</View>
</View>
      <View style={{paddingTop:30,alignItems:'center'  }}>

<TouchableOpacity onPress={() => ('')} style={{alignSelf:'center',backgroundColor:'blue',width:'80%',padding:5,borderRadius:5,height:35,justifyContent:'center'}}><Text style={{color:'white',alignSelf:'center',fontSize:20}}>Save</Text></TouchableOpacity>

 </View>


    </View>
</View>
  </ScrollView>
</KeyboardAvoidingView>
  )
}

export default EditAccount

const styles = StyleSheet.create({
  flex: {
    height:height*0.6,
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