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
import moment from "moment";

const Stack = createNativeStackNavigator();

const App = () => {
  const [userToken, setUserToken] = useState(null);
  const [date, setDate] = useState(null);
  const [onboardStatus, setOnboardStatus] = useState(null);
  const [logStatus, setLogStatus] = useState(null)
  const [dateStatus, setDateStatus] = useState(true);
  useEffect(() => {
    const getToken = async () => {
      const token = await AsyncStorage.getItem("user");
      setUserToken(JSON.parse(token));
    };
    const getStatus = async () => {
      const status = await AsyncStorage.getItem("onboarding");
      setOnboardStatus(status);
      const see = JSON.parse(status);
      console.log(see);
    };
    const getLoginStatus = async () => {
      const loginStatus = await AsyncStorage.getItem('loginStatus')
      if(loginStatus !== null){
        setLogStatus(JSON.parse(loginStatus))
      }
      console.log(loginStatus)
    }
    const autoLogout = async () => {
      const expiry = await AsyncStorage.getItem("expiryDate");
      setDate(JSON.parse(expiry));
      if (date !== null) {
        const formattedDate = moment(date.substring(0, 10))
          .startOf("day")
          .fromNow();

        console.log(formattedDate);
        if (formattedDate < Date.now) {
          await AsyncStorage.removeItem("expiryDate");
          await AsyncStorage.removeItem("user");
          setDateStatus(false);
          setUserToken(null);
        }
      }
    };

    getToken();
    autoLogout();
    getStatus();
    getLoginStatus()
  }, [userToken, date, onboardStatus]);
  return (
    <RootSiblingParent>
      <NavigationContainer>
        <Stack.Navigator>
          {userToken === null ? (
            <>
              {onboardStatus === true ? (
                <Stack.Screen
                  name="Onboard"
                  component={Onboard}
                  options={{ headerShown: false }}
                />
              ) : null}
              {
                logStatus === null ? (
                  <>
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
                name="Verify phone"
                component={SigninOTP}
                options={{
                  headerShown: true,
                  headerBackTitleVisible: false,
                }}
              />

              <Stack.Screen
                name="Background Check"
                component={BackgroundCheck}
                options={{
                  headerShown: true,
                  headerBackTitleVisible: false,
                }}
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
                  </>
                ) : (null)
              }
            </>
          ) : null}

         
      
              <Stack.Screen
              name="Sign In"
              component={SigninScreen}
              options={{ headerShown: false, headerBackTitleVisible: false }}
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
