import { Button, Image, StyleSheet, Text, View,TouchableOpacity, SafeAreaView,Dimensions, ScrollView,KeyboardAvoidingView} from 'react-native'
import React from 'react'
import VehicleInfoInput from '../components/VehicleInfoInput'
import { useNavigation } from '@react-navigation/native';

const {width,height} = Dimensions.get('window');
const VehicleInfo = () => {
  
const navigation = useNavigation();
  return (
    <KeyboardAvoidingView>
    <ScrollView>
   
     <VehicleInfoInput />
    </ScrollView>
    </KeyboardAvoidingView>
  )
}

export default VehicleInfo

const styles = StyleSheet.create({})