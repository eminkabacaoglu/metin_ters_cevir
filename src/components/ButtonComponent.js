import { View, Text,TouchableOpacityProps ,TouchableOpacity, StyleSheet,} from "react-native";
import React from "react";


export default function ButtonComponent(props) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.buttonContainer}
        onPress={()=>{
            props?.onPress()
        }}>
        <Text style={styles.buttonText}>Metni Ters Çevir</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({

  container: { justifyContent: "center", alignItems: "center" },
  buttonContainer: {
    backgroundColor: "#f67f7f",
    borderRadius: 10,
    padding: 5,
    paddingHorizontal: 20,
  },
  buttonText: {
    fontSize: 24,
    fontWeight: "bold",
    padding: 5,
  },
});
