import { StyleSheet, Text, View, Image } from 'react-native';

export const Card = ({ name, image, team, description, stars }) => {
  return (
    <View style={styles.card}>
      
      <View style={styles.header}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.team}>{team}</Text>
      </View>

      <Image source={{uri:image}} style={styles.logo} />

      <Text style={styles.description}>{description}</Text>

      <Text style={styles.stars}>
        {"⭐".repeat(stars)}
      </Text>

    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    justifyContent:"center",
    alignItems:"center",
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 16,
    margin: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
    elevation: 5,
  },
  header: {
    marginBottom: 10,
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
  },
  team: {
    fontSize: 14,
    color: "#777",
    marginTop: 2,
  },
  logo: {
    height: 250,
    width:250,
    borderRadius: 12,
    marginVertical: 10,
  },
  description: {
    fontSize: 14,
    color: "#555",
    lineHeight: 20,
    marginBottom: 10,
  },
  stars: {
    fontSize: 18,
    color: "#f5a623",
  },
});