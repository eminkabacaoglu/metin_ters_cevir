import { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import ButtonComponent from "./src/components/ButtonComponent";
import TextInputComponent from "./src/components/TextInputComponent";

export default function App() {
  const [inputText, setInputText] = useState("");
  const [reversedText, setReversedText] = useState("");

  const reverseText = () => {
    setReversedText(inputText.split("").reverse().join(""));
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Bir Metin Giriniz"
        onChangeText={setInputText}
        value={inputText}
      />
      <ButtonComponent
        onPress={() => {
            reverseText()
          }}
      />
      <TextInputComponent text={reversedText}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f91",
  },
  input: {
    width: "80%",
    borderWidth: 0.5,
    borderColor: "white",
    borderRadius: 10,
    padding: 10,
    backgroundColor: "#fff",
  },
  reversedText:{
    width: "80%",
    backgroundColor:"#f99",
    borderWidth: 0.5,
    borderColor: "#f99",
    borderRadius: 10,
    padding: 10,
  }
});
