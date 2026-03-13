import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const array = Array.from({ length: 10 }).map((_, index) => index);

  const [operacao, setOperacao] = useState("");
  const [resultado, setResultado] = useState(0);

  console.log(array);
  array.push("+");
  array.push("-");
  array.push("Calcular");

  const handleButtonPress = (value) => {
    console.log(`Button ${value} pressed`);
    if (value === "Calcular") {
      setResultado(eval(operacao));
      return;
    } 
    
    setOperacao(prev => prev + value.toString());
    setResultado(prev => prev + value.toString());
    
  };
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.head}>
        <Text style={{fontSize: 30}}>{resultado}</Text>
      </View>
      <View style={styles.bot}>
        {
          array.map((value) => (
            <View key={value} style={styles.buttonWrapper}>
              <Button title={value.toString()} onPress={() => handleButtonPress(value)} />
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
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  head: {
    flex: 1,
    alignItems: "flex-end",
    justifyContent: "flex-end",
    width: '100%',
    padding: 20
  },
  bot: {
    flex: 0.7,
    alignItems: "center",
    justifyContent: "center",
    flexWrap: "wrap",
    flexDirection: "row",
    width: '100%',
  },
  buttonWrapper: {
    width: '33.33%',
    padding: 5
  }
});
