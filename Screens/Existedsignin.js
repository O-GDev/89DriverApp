import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const Existedsignin = (props) => {
  const navigation = useNavigation();
  return (
      <View style={styles.Existedsignin}>
    <Text style={{fontWeight: 'bold',paddingTop:20}}>Already have an account?<Text onPress={() => navigation.navigate('Sign In')}> Sign in</Text>    </Text>
      </View>
    
  )
}

export default Existedsignin

const styles = StyleSheet.create({
Existedsignin: {
        justifyContent: 'center',
        alignItems: 'center',
}
})