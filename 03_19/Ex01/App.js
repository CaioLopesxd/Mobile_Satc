import { Button, ScrollView, StyleSheet, View } from 'react-native';
import { drivers } from './data/drivers';
import { Card } from './components/Card';
import { useState } from 'react';

export default function App() {
  const [driver,setDriver] = useState(0);
  function handleClick(){
    setDriver(drivers[Math.floor(Math.random() * drivers.length)]);
  }

  return (
    <View style={styles.container}>
      <ScrollView>
       {/* drivers.map((driver, index) => (
        <Card
          key={index}
          stars={driver.stars}
          name={driver.name}
          image={driver.image}
          team={driver.team}
          description={driver.description}
        />
      )) */
      
      }
       <Card
          key={1}
          stars={driver.stars}
          name={driver.name}
          image={driver.image}
          team={driver.team}
          description={driver.description}
        />
      </ScrollView>
      <Button title='Mudar' onPress={()=>{handleClick()}}/>
        
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding:20
  }
});
