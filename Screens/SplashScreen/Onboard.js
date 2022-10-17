import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Swiper from 'react-native-swiper'
import OnBaord1 from './OnBaord1'
import OnBoard2 from './OnBoard2'
import OnBoard3 from './OnBoard3'



const Onboard = () => {
  return (
    <Swiper style={{backgroundColor:'white'}}>
        <OnBaord1/>
        <OnBoard2/>
        <OnBoard3/>
    </Swiper>
  )
}

export default Onboard

const styles = StyleSheet.create({})