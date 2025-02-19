import React from 'react';
import { Dimensions, Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import { useNavigation } from '@react-navigation/native';
import Card from './Card';
import { Meme } from './Card';

const CustomCarousel = ({ data }: { data: Meme[] }) => {
  const width = Dimensions.get('window').width;

  const navigation = useNavigation();

  const handleMemePress = (meme: Meme) => {
    // Navigate to DetailScreen and pass the meme data using expo-router
    navigation.navigate('meme-detail', { params: { meme } });
  };

  return (
    <Carousel
      loop
      width={width}
      height={width * 1.4}
      autoPlay
      data={data}
      scrollAnimationDuration={1000}
      onSnapToItem={(index: number) => console.log('current index:', index)}
      renderItem={({ item }: { item: Meme }) => 
        <TouchableOpacity 
          onPress={() => handleMemePress(item)}
          style={styles.touchableWrapper} 
        >
          <Card meme={item} />
        </TouchableOpacity>
      }
    />
  );
};

const styles = StyleSheet.create({
  touchableWrapper: {
    flex: 1, 
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CustomCarousel;
