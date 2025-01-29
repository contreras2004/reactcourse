import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const Card = ({ imageUrl }: { imageUrl: string }) => (
    <View style={styles.card}>
        <Image source={{ uri: imageUrl }} style={styles.image} resizeMode="contain" />
    </View>
);

const styles = StyleSheet.create({
    card: {
      flex: 1,
      borderWidth: 1,
      justifyContent: 'center',
      borderRadius: 10,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
      marginHorizontal: 10,
      marginVertical: 10,
      height: 200, // Añadir un tamaño fijo para la imagen
    },
    image: {
      width: '100%',
      height: '100%',
    },
  });
  

export default Card;