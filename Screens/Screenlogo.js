import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import logo from './assets/logo.png'

const Screenlogo = () => {
  return (
    <View>
      <View style={styles.container}> 
          
      <img src={logo} className="App-logo" alt="logo" />
    
      </View>
    </View>
  )
}

export default Screenlogo

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
      },
      ImageBackground: {
        flex: 1,
        resizeMode: "cover",
        width: "100%",
        alignItems: "center",
      },
})