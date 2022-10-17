import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';

export default function CustomButton({ title, CustomStyle, pressHandler, buttonLength, margin, borderRadius }) {
    const Style = StyleSheet.create({
        button: {
            alignSelf: "center",
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: "#2662FA",
            minWidth: 200,
            width: buttonLength,
            height: 50,
            shadowColor: 'black',
            borderRadius: borderRadius,
            shadowOffset: {
                width: 20,
                height: 40,
            },
            shadowOpacity: .4,
            shadowRadius: 10,
            margin: margin,
            //             width: 105px,
            // height: 15px;

            // font-family: 'Inconsolata';
            // font-style: normal;
            // font-weight: 700;
            // font-size: 14px;
            // line-height: 15px



        },
        text: {
            fontFamily: 'Inconsolata-Bold',
            color: "white",
            fontSize: 18,
            fontWeight: "700"
        }
    })

    return (
        <Pressable style={[Style.button, CustomStyle]} onPress={pressHandler} >
            <Text style={Style.text}>{title}</Text>
        </Pressable>
    );





}

