import { View, Text,StyleSheet } from 'react-native'
import React from 'react'

export default function TextInputComponent(props) {
    return (
        <View style={styles.container}>
          <Text style={styles.text}>{props?.text}</Text>
        </View>
      );
    }
    
    const styles = StyleSheet.create({
      container: {
        marginTop: 10,
        padding: 10,
        backgroundColor: "#e0e0e0",
        borderRadius: 8,
        alignItems: "center",
        minWidth: "80%",
      },
      text: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#333",
      },
    });