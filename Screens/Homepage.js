import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import Settings from './DrawerComponent/Settings'
import Homes from './DrawerComponent/Homes'
import Deliveryhistory from './DrawerComponent/Deliveryhistory'
import Deliveryrequest from './DrawerComponent/Deliveryrequest'
import Emergency from './DrawerComponent/Emergency'
import Profile from './DrawerComponent/Profile'
import { FontAwesome5 } from '@expo/vector-icons';
import {Navigation} from './navigators/Navigation'
import EditAccount from './DrawerComponent/EditAccount'
import HeaderComponent from './HeaderComponent'
import Deliver from './DrawerComponent/Deliver'
import Del from './DrawerComponent/Del'
import Deli from './DrawerComponent/Deli'
import ProfileHeader from './DrawerComponent/ProfileHeader'
import Tour from './Tour'
import tourheader from './Tourheader'

const Homepage = () => {
    const Drawer = createDrawerNavigator()
  return (
    <Drawer.Navigator drawerContent={(props) => <Navigation {...props} />} >
    <Drawer.Screen
      name="Homes" component={Homes}
      options={{
        headerTitle: "Ready To Pick Up Foods!", headerTitle:()=><HeaderComponent/> ,
        drawerIcon: ({ focused, size }) => (
            <FontAwesome5 name="home" size={size} color="blue" />
          ),
      }} />
      
      <Drawer.Screen
      name= "Deliveryhistory" component={Deliveryhistory}
      options={{
        headerTitle: "Delivery History", title: "Delivery History",
        drawerIcon: ({ focused, size }) => (
            <FontAwesome5 name="history" size={size} color="blue" />
          ),
      }} />
      <Drawer.Screen
      name= "Deliveryrequest" component={Deliveryrequest}
      options={{
        headerTitle: "Delivery Request", title: "Delivery Request",
        drawerIcon: ({ focused, size }) => (
            <FontAwesome5 name="bell" size={size} color="blue"   />
          ),
      }} />
    
      <Drawer.Screen
      name= "Emergency" component={Emergency}
      options={{
        headerTitle: "Emergency", title: "Emergency",
        drawerIcon: ({ focused, size }) => (
            <FontAwesome5 name="exclamation-circle" size={size} color="blue"  />
          ),
      }} />
      <Drawer.Screen
      name= "Settings" component={Settings}
      options={{
        headerTitle: "Setting", title: "Setting",
        drawerIcon: ({ focused, size }) => (
            <FontAwesome5 name="cog" size={size} color="blue" />
          ),
      }} />
      <Drawer.Screen
      name= "Manageaccount" component={Profile}
      options={{
        headerTitle: "Setting", headerTitle:()=><ProfileHeader/>,
        drawerIcon: ({ focused, size }) => (
            <FontAwesome5 name="cog" size={size} color="blue" />
          ),
      }} />
      <Drawer.Screen
      name= "EditAccount" component={EditAccount}
      options={{
        headerTitle: "Edit Account", title: "EditAccount",
        drawerIcon: ({ focused, size }) => (
            <FontAwesome5 name="cog" size={size} color="blue" />
          ),
      }} />
      
       <Drawer.Screen
      name="Deliver" component={Deliver}
      options={{
        headerTitle: "Ready To Pick Up Foods!", headerTitle:()=><HeaderComponent/> ,
        drawerIcon: ({ focused, size }) => (
            <FontAwesome5 name="home" size={size} color="blue" />
          ),
      }} />
      <Drawer.Screen
      name="Del" component={Del}
      options={{
        headerTitle: "Ready To Pick Up Foods!", headerTitle:()=><HeaderComponent/> ,
        drawerIcon: ({ focused, size }) => (
            <FontAwesome5 name="home" size={size} color="blue" />
          ),
      }} />
       <Drawer.Screen
      name="Deli" component={Deli}
      options={{
        headerTitle: "Ready To Pick Up Foods!", headerTitle:()=><HeaderComponent/> ,
        drawerIcon: ({ focused, size }) => (
            <FontAwesome5 name="home" size={size} color="blue" />
          ),
      }} />
      <Drawer.Screen
      name="prof" component={ProfileHeader}
      options={{
        headerTitle: "Ready To Pick Up Foods!", headerTitle:()=><ProfileHeader/> ,
        drawerIcon: ({ focused, size }) => (
            <FontAwesome5 name="home" size={size} color="blue" />
          ),
      }} />
      <Drawer.Screen
      name="Tour" component={Tour}
      options={{
        headerTitle: "Ready To Pick Up Foods!", headerTitle:()=><tourheader/> ,
        drawerIcon: ({ focused, size }) => (
            <FontAwesome5 name="home" size={size} color="blue" />
          ),
      }} />
      
  </Drawer.Navigator>
)
}


const Home = () => {
    <View>
        <Text></Text>
    </View>
};  

export default Homepage

const styles = StyleSheet.create({})