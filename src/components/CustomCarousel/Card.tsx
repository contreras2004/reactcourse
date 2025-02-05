import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';

export interface Meme {
  id: string;
  url: string;
  name: string;
}

const Card = ({ meme }: { meme: Meme }) => (

  <View style={styles.card}>
    <Image source={{ uri: meme.url }} style={styles.image} resizeMode="cover" />
    <View style={styles.title}>
      <Text style={styles.name}>{meme.name}</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  card: {
    flex: 1,
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginHorizontal: 10,
    marginVertical: 10,
    height: 200,
    position: 'relative',
    overflow: 'hidden', // Added to prevent elements from showing outside of the card boundaries
    width: "100%",
  },
  image: {
    borderWidth: 1,
    borderRadius: 10,
    width: '90%',
    height: '90%',
    alignSelf: 'center',
  },
  title: {
    width: '90%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 10,
    borderRadius: 10,
    alignSelf: 'center',
    marginTop: 10,
  },
  name: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  description: {
    color: '#fff',
    fontSize: 14,
  },
});

export default Card;
