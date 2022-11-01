import React from 'react';
import { View, Text, ScrollView, SafeAreaView, Image, StyleSheet } from 'react-native';

import GlobalStyle from '../../utils/GlobalStyle';

export default function DeliveryHistory() {
  return (
    <ScrollView>

      <SafeAreaView style={[GlobalStyle.horizontal_center_screen,
      { backgroundColor: 'white', paddingHorizontal: 20, }]}>




        {/* <View style={[Style.box]}>
          <Image source={require('../../assets/maps/small_map.png')} style={{ height: 80, width: '100%', }} />
          <View style={[GlobalStyle.horizontal_view, Style.text_row]}>
            <Text style={Style.text}>Groceries and food</Text>
            <Text style={Style.text}>7KM</Text>
          </View>
          <View style={[GlobalStyle.horizontal_view, Style.text_row]}>
            <Text style={Style.text}>24 Jun 2022 at 11:54 PM</Text>
            <Text style={Style.text}>$19</Text>
          </View>
        </View>





      */}
      </SafeAreaView>


    </ScrollView>
  );
}

const Style = StyleSheet.create({
  btn: {
    height: 30,

  },
  box: {
    backgroundColor: 'white',
    minHeight: 120,
    alignItems: "center",
    justifyContent: "center", marginBottom: 10
  },
  text: {
    fontSize: 14,
    fontWeight: 'bold',

  },
  text_row: {
    width: '100%',
    flex: 1,
    justifyContent: 'space-between',
    paddingHorizontal: 3,
  }

})