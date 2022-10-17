import React, { useState } from 'react';
import { View, Text, ScrollView, SafeAreaView, StyleSheet,TouchableOpacity,FlatList, ActivityIndicator } from 'react-native';
import Strings from '../../utils/Constant/Strings';
import CustomButton from '../../utils/CustomButton';
import GlobalStyle from '../../utils/GlobalStyle';
import { FontAwesome5 } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';


export default function Deliveryrequest() {
// const [data,setData] = useState([]);
// const [load,setLoad] = useState(true)
//   const DevReq = async () => {
//     fetch("https://driver86.herokuapp.com/api/login/")
// .then(response => response.json())
// .then((responseData)=> {
//   setLoad(false)
//   setData(responseData)
// // this.setState({
// // load: false,
// // dataSource: responseData.data
// // })
// })
// .catch(error=>console.log(error)) //to catch the errors if any
// }

// FlatListItemSeparator = () => {
//   return (
//   <View style={{
//   height: .5,
//   width:"100%",
//   backgroundColor:"rgba(0,0,0,0.5)",
//   }}
//   />
//   );
//   }
//   renderItem=(data)=>
//   <TouchableOpacity style={[GlobalStyle.roundContainer, { marginBottom: 10,backgroundColor:'white',
// shadowColor: "black",
// shadowRadius: 4.65,
// shadowOffset: {
// height: 3,
// width: 0,
// },
// shadowOpacity: 20,
// }]} onPress={() => navigation.navigate('Deliver')}>
//           <View >
//           <Text style={{textAlign:'center',fontWeight:'bold',fontSize:25}}>
//             Frozen Food Joint</Text>
//             <View><Text style={{textAlign:'center'}}> <FontAwesome5 name='map-marker-alt' color={"blue"} size={25} /></Text></View>
//           <Text style={{ color: 'green', fontSize: 15,paddingBottom:10 }}>
          
         
//             2324 Murphy Court, East Derry, New Hampshire
//           </Text>
//           </View>
//           <View style={{width:'100%'}}>
//          <TouchableOpacity onPress={() => navigation.navigate('Deliver')} style={{alignSelf:'center',backgroundColor:'blue',width:'60%',padding:10,borderRadius:30}}><Text style={{color:'white',fontWeight:'bold',alignSelf:'center',fontSize:20}}>Accept Request</Text></TouchableOpacity>
//          </View>
          
//         </TouchableOpacity>

  const navigation = useNavigation();

  return (

    <ScrollView>
      <SafeAreaView style={[GlobalStyle.horizontal_center_screen, { marginHorizontal: 20, marginVertical: 10 }]}>

      
        {/* <TouchableOpacity style={[GlobalStyle.roundContainer, { marginBottom: 10,backgroundColor:'white',
shadowColor: "black",
shadowRadius: 4.65,
shadowOffset: {
height: 3,
width: 0,
},
shadowOpacity: 20,
}]} onPress={() => navigation.navigate('Deliver')}>
          <View >
          <Text style={{textAlign:'center',fontWeight:'bold',fontSize:25}}>
            Frozen Food Joint</Text>
            <View><Text style={{textAlign:'center'}}> <FontAwesome5 name='map-marker-alt' color={"blue"} size={25} /></Text></View>
          <Text style={{ color: 'green', fontSize: 15,paddingBottom:10 }}>
          
         
            2324 Murphy Court, East Derry, New Hampshire
          </Text>
          </View>
          <View style={{width:'100%'}}>
         <TouchableOpacity onPress={() => navigation.navigate('Deliver')} style={{alignSelf:'center',backgroundColor:'blue',width:'60%',padding:10,borderRadius:30}}><Text style={{color:'white',fontWeight:'bold',alignSelf:'center',fontSize:20}}>Accept Request</Text></TouchableOpacity>
         </View>
          
        </TouchableOpacity>
        


        <TouchableOpacity style={[GlobalStyle.roundContainer, { marginBottom: 10,shadowColor: "black",
shadowRadius: 4.65,
shadowOffset: {
height: 3,
width: 0,
},
shadowOpacity: 10, }]} onPress={() => navigation.navigate('Deliver')}>
          <View>
          <Text style={{textAlign:'center',fontWeight:'bold',fontSize:25}}>
            Foodoe Hub</Text>
            
          <View>
          <Text style={{textAlign:'center'}}><FontAwesome5 name='map-marker-alt' color={"blue"} size={30} /></Text></View>
          <Text style={{ color: 'green', fontSize: 15,paddingBottom:10 }}>
            2004 Nelm Street, saint louis
          </Text>
          </View>
           <View style={{width:'100%'}}>
         <TouchableOpacity onPress={() => navigation.navigate('Deliver')} style={{alignSelf:'center',backgroundColor:'blue',width:'60%',padding:10,borderRadius:30,borderWidth:1}}><Text style={{color:'white',fontWeight:'bold',alignSelf:'center',fontSize:20}}>Accept Request</Text></TouchableOpacity>
         </View>
        </TouchableOpacity>


        <TouchableOpacity style={[GlobalStyle.roundContainer, { marginBottom: 10,shadowColor: "black",
shadowRadius: 4.65,
shadowOffset: {
height: 3,
width: 0,
},
shadowOpacity: 10, }]} onPress={() => navigation.navigate('Deliver')}>
          <View>
          <Text style={{textAlign:'center',fontWeight:'bold',fontSize:25}}>
            Benny Bar</Text>
            
          <View>
          <Text style={{textAlign:'center'}}><FontAwesome5 name='map-marker-alt' color={"blue"} size={30} /></Text></View>
          <Text style={{ color: 'green', fontSize: 15,paddingBottom:10 }}>
            2015 Traders Alley, Unadilla
          </Text>
          </View>
          <View style={{width:'100%'}}>
         <TouchableOpacity onPress={() => navigation.navigate('Deliver')} style={{alignSelf:'center',backgroundColor:'blue',width:'60%',padding:10,borderRadius:30,borderWidth:1}}><Text style={{color:'white',fontWeight:'bold',alignSelf:'center',fontSize:20}}>Accept Request</Text></TouchableOpacity>
         </View>
        </TouchableOpacity>


        <TouchableOpacity style={[GlobalStyle.roundContainer, { marginBottom: 10,shadowColor: "black",
shadowRadius: 4.65,
shadowOffset: {
height: 3,
width: 0,
},
shadowOpacity: 10, }]} onPress={() => navigation.navigate('Deliver')}>
          <View>
          <Text style={{textAlign:'center',fontWeight:'bold',fontSize:25}}>
           Groceries and Food</Text>
           
          <View>
          <Text style={{textAlign:'center'}}><FontAwesome5 name='map-marker-alt' color={"blue"} size={30} /></Text></View>
          <Text style={{ color: 'green', fontSize: 15, paddingBottom:10 }}> 
            4238 Tuna Street, Southfield
          </Text> 
          </View>
          <View style={{width:'100%'}}>
         <TouchableOpacity onPress={() => navigation.navigate('Deliver')} style={{alignSelf:'center',backgroundColor:'blue',width:'60%',padding:10,borderRadius:30,borderWidth:1}}><Text style={{color:'white',fontWeight:'bold',alignSelf:'center',fontSize:20}}>Accept Request</Text></TouchableOpacity>
         </View>

        </TouchableOpacity>

        <TouchableOpacity style={[GlobalStyle.roundContainer, { marginBottom: 10,shadowColor: "black",
shadowRadius: 4.65,
shadowOffset: {
height: 3,
width: 0,
},
shadowOpacity: 10, }]} onPress={() => navigation.navigate('Deliver')}>
          <View>
          <Text style={{textAlign:'center',fontWeight:'bold',fontSize:25}}>
            Mercy and Grace Food</Text>
            
          <View>
          <Text style={{textAlign:'center'}}><FontAwesome5 name='map-marker-alt' color={"blue"} size={30} /></Text></View>
          <Text style={{ color: 'green', fontSize: 15,paddingBottom:10 }}>
            2179 John Daniel Drive, Lesterville
          </Text>
          </View>
          <View style={{width:'100%'}}>
         <TouchableOpacity onPress={() => navigation.navigate('Deliver')} style={{alignSelf:'center',backgroundColor:'blue',width:'60%',padding:10,borderRadius:30,borderWidth:1}}><Text style={{color:'white',fontWeight:'bold',alignSelf:'center',fontSize:20}}>Accept Request</Text></TouchableOpacity>
         </View>
        </TouchableOpacity>
        <TouchableOpacity style={[GlobalStyle.roundContainer, { marginBottom: 10,shadowColor: "black",
shadowRadius: 4.65,
shadowOffset: {
height: 3,
width: 0,
},
shadowOpacity: 10, }]} onPress={() => navigation.navigate('Deliver')}>
         <View>
          <Text style={{textAlign:'center',fontWeight:'bold',fontSize:25}}>
            Frozen Food Joint</Text>
            
          <View>
          <Text style={{textAlign:'center'}}><FontAwesome5 name='map-marker-alt' color={"blue"} size={30} /></Text></View>
          <Text style={{ color: 'green', fontSize: 15,paddingBottom:10 }}>
                 2324 Murphy Court, East Derry, New Hampshire
          </Text>
          </View>

         <View style={{width:'100%'}}>
         <TouchableOpacity onPress={() => navigation.navigate('Deliver')} style={{alignSelf:'center',backgroundColor:'blue',width:'60%',padding:10,borderRadius:30,borderWidth:1}}><Text style={{color:'white',fontWeight:'bold',alignSelf:'center',fontSize:20}}>Accept Request</Text></TouchableOpacity>
         </View>
    
        </TouchableOpacity> */}

      </SafeAreaView>
    </ScrollView>
  );
}
const Style = StyleSheet.create({
  btn: {
    
  },
})