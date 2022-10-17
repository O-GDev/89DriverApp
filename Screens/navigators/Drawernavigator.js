import { View, Text } from 'react-native';
import React from 'react'
import 'react-native-gesture-handler';
import { createDrawerNavigator } from 'react-navigation-drawer';


const Drawer = createDrawerNavigator();

const Drawernavigator = () => {
  const Drawer = createDrawerNavigator();
  return (
      <Drawer.Navigator initialRouteName="Homepage">
        {/* <Drawer.Screen name="Driver Balance" component={settings} />
        <Drawer.Screen name="Delivery Request Page" component={NotificationsScreen} /> */}
      </Drawer.Navigator>
  )
}

export default Drawernavigator