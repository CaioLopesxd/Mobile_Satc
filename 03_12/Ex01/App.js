import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Button } from "react-native-paper";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  const buttons = ["(",")","D","/",
                   "7","8","9","x",
                   "4","5","6","-",
                   "1","2","3","+",
                   "C","0",",","="];

  const [resultado, setResultado] = useState("");
  const [operacoes, setOperacoes] = useState("");


  const handleButtonPress = (value) => {
    if (value === "C") {
      setResultado("");
      setOperacoes("");
      return;
    }
    if (value === "D") {
      setOperacoes(prev => prev.slice(0, -1));
      return;
    }
    if (value === "=") {
      try{
        setResultado(eval(operacoes.replace("x", "*").replace(",", ".")));
      }catch(error){
        alert("Error");
        setResultado("");
        setOperacoes("");
      }
      return;
    } 
    
    setOperacoes(prev => prev + value.toString());
    
  };
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.head}>
        <Text style={{fontSize: 30}}>{operacoes}</Text>
        <Text style={{fontSize: 30}}>{resultado}</Text>
      </View>
      <View style={styles.bot}>
        {
          buttons.map((value,_index) => (
            <View key={_index} style={styles.buttonWrapper}>

              <Button mode="contained" buttonColor="green" onPress={() => handleButtonPress(value)} >
                {value.toString()}
              </Button>
            </View>
          ))
        }
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 16
  },
  head: {
    flex: 1,
    alignItems: "flex-end",
    justifyContent: "flex-end",
    width: "100%",
    padding: 20
  },
  bot: {
    alignItems: "center",
    justifyContent: "center",
    flexWrap: "wrap",
    flexDirection: "row",
    width: "100%",
  },
  buttonWrapper: {
    width: "25%",
    padding: 5
  }
});
