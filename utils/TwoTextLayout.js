import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';

export default function TwoTextLayout({ title, subtitle, pressHandler, layoutStyle, titleStyle, subtitleStyle, }) {
    return (
        <Pressable style={layoutStyle} onPress={pressHandler} >
            <Text style={titleStyle}>{title}</Text>
            <Text style={subtitleStyle}>{subtitle}</Text>
        </Pressable>
    );





}

