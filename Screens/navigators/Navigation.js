import { StyleSheet, Text, TouchableOpacity, View,Image,Dimensions,SafeAreaView, StatusBar } from 'react-native'
import React from 'react'
import Homes from '../DrawerComponent/Homes'
import { DrawerContentScrollView,DrawerItem,  } from '@react-navigation/drawer'
import { Avatar,Title,Caption,paragraph,TouchableRipple,Switch, Drawer, } from 'react-native-paper'
import Icon from 'react-native-vector-icons/Ionicons';
import { FontAwesome5 } from '@expo/vector-icons';
import { useRoute } from '@react-navigation/native';

const{width,height}=Dimensions.get('window')
export function Navigation(props) {

  return (
    <SafeAreaView>
      <StatusBar />
      <TouchableOpacity onPress={() => {props.navigation.navigate('Manageaccount')}}>
      <View style={{alignSelf:'center',marginTop:20}}  >
    <View style={{alignItems:'center'}}>
        <Avatar.Image source={require('../../assets/john.png')}  />
      </View>
      <View>
        <Title style={{fontSize:height*0.025}}>John Walker</Title>
      </View>
      <View>
        <Caption style={{color:'blue',alignSelf:'center',fontSize:height*0.016}}>View Profile</Caption>
      </View>
    </View>
      </TouchableOpacity>
      <View style={{borderWidth:0.25,backgroundColor:'black',}} />
      <View style={{paddingLeft:20,paddingTop:20,}}>
      <TouchableOpacity style={{flexDirection:'row',paddingBottom:15}}  onPress={() => {props.navigation.navigate('Homes')}}>
        <Text>
            <FontAwesome5 name="home" size={height*0.03} color="blue" /></Text>
            <Text style={{fontSize:17,paddingLeft:20,fontWeight:'300'}}>Home</Text>
      </TouchableOpacity>
    
      <TouchableOpacity style={{flexDirection:'row',paddingBottom:15}} onPress={() => {props.navigation.navigate('Deliveryrequest')}}>
        <Text>
            <FontAwesome5 name="bell" size={height*0.03} color="blue" /></Text>
            <Text style={{fontSize:17,paddingLeft:24,fontWeight:'300'}}>Delivery Request</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{flexDirection:'row',paddingBottom:15}} onPress={() => {props.navigation.navigate('Deliveryhistory')}}>
        <Text>
            <FontAwesome5 name="history" size={height*0.03} color="blue" /></Text>
            <Text style={{fontSize:17,paddingLeft:20,fontWeight:'300'}}>Delivery History</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={{flexDirection:'row',paddingBottom:15}} onPress={() => {props.navigation.navigate('Emergency')}}>
        <Text>
            <FontAwesome5 name="exclamation-circle" size={height*0.03} color="blue" /></Text>
            <Text style={{fontSize:17,paddingLeft:20,fontWeight:'300'}}>Emergency</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{flexDirection:'row',paddingBottom:15}} onPress={() => {props.navigation.navigate('Settings')}}>
        <Text>
            <FontAwesome5 name="cog" size={height*0.03} color="blue" /></Text>
            <Text style={{fontSize:17,paddingLeft:20,fontWeight:'300'}}>Setting</Text>
      </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
};

export default Navigation

const styles = StyleSheet.create({})