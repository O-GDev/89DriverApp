import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Onboard from "./Screens/SplashScreen/Onboard";
import Locations from "./Screens/Location";
import SignupScreen from "./Screens/sign/SignupScreen";
import SigninScreen from "./Screens/sign/SigninScreen";
import SigninOTP from "./Screens/sign/SigninOTP";
import VehicleInfo from "./Screens/VehicleInfo";
import Tour from "./Screens/Tour";
import Homepage from "./Screens/Homepage";
import Deliveryrequest from "./Screens/DrawerComponent/Deliveryrequest";
import BackgroundCheck from "./components/Check/BackgroundCheck";
import HeaderComponent from "./Screens/HeaderComponent";
import Deliver from "./Screens/DrawerComponent/Deliver";
import Profile from "./Screens/DrawerComponent/Profile";
import EditAccount from "./Screens/DrawerComponent/EditAccount";
import EditAccountHeader from "./Screens/DrawerComponent/EditAccountHeader";
import ChangePassword from "./Screens/DrawerComponent/ChangePassword";
import { RootSiblingParent } from "react-native-root-siblings";
import SigninOt from "./components/SigninOt";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect } from "react";
import { useState } from "react";

const Stack = createNativeStackNavigator();


// const token = AsyncStorage.getItem("user");
// console.warn(JSON.parse(token));

const App = () => {
  const [userToken, setUserToken] = useState(null)
  useEffect(()=> {
    const getToken =  async() =>{
      const token = await AsyncStorage.getItem("user");
      setUserToken(JSON.parse(token))
      // console.warn(JSON.parse(token))
    }
  
    getToken()
  })
  return (
    <RootSiblingParent>
      <NavigationContainer>
        <Stack.Navigator>
 
           <Stack.Screen
            name="Onboard"
            component={Onboard}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Location"
            component={Locations}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Sign Up"
            component={SignupScreen}
            options={{ headerShown: false }}
          />
          
          <Stack.Screen
            name="Sign In"
            component={SigninScreen}
            options={{ headerShown: false, headerBackTitleVisible: false }}
          />
         
          <Stack.Screen
            name="Verify phone"
            component={SigninOTP}
            options={{ headerShown: true, headerBackTitleVisible: false }}
          />
         
          


          <Stack.Screen
            name="Background Check"
            component={BackgroundCheck}
            options={{ headerShown: true, headerBackTitleVisible: false }}
          />
           
           
          <Stack.Screen
            name="Vehicle Info"
            component={VehicleInfo}
            options={{
              headerShown: true,
              title: "89driver",
              headerBackTitleVisible: false,
            }}
          />
          <Stack.Screen
            name="Tour"
            component={Tour}
            options={{
              headerShown: true,
              title: "89driver",
              headerBackTitleVisible: false,
            }}
          />
          <Stack.Screen
            name="Home"
            component={Homepage}
            options={{
              headerShown: false,
              headerTitle: () => <HeaderComponent />,
            }}
          />
          <Stack.Screen
            name="Deliver"
            component={Deliver}
            options={{
              headerShown: true,
              headerTitle: () => <HeaderComponent />,
            }}
          />
          <Stack.Screen
            name="Deli"
            component={Deliveryrequest}
            options={{
              headerShown: true,
              headerTitle: () => <HeaderComponent />,
            }}
          />
          <Stack.Screen
            name="Profile"
            component={Profile}
            options={{ headerShown: true, headerBackTitleVisible: false }}
          />
          <Stack.Screen
            name="Profedit"
            component={EditAccount}
            options={{
              headerShown: true,
              headerBackTitleVisible: false,
              title: "Edit Account",
              headerTitle: () => <EditAccountHeader />,
            }}
          />
          <Stack.Screen
            name="ChangePassword"
            component={ChangePassword}
            options={{ title: "Change Password" }}
          />
          <Stack.Screen
            name="SigninOt"
            component={SigninOt}
            options={{ headerShown: true, title: "Verify Phone" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </RootSiblingParent>
  );
};

export default App;
