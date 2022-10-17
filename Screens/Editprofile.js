import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Editprofile = () => {
  return (
    <View>
      <Text>Editprofile</Text>
      <View style={styles.flex}>
      
      </View>
    </View>
  )
}

export default Editprofile

const styles = StyleSheet.create({
    flex: {
        height:'65%',
        backgroundColor: 'white',
        borderRadius:5,
        elevation: 20,
        marginTop: 130,
        marginHorizontal: 12,
        borderBottomEndRadius: 15,
        borderBottomStartRadius: 15,
        marginBottom: 40,
      }
})