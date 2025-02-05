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
    // Navigate to DetailScreen and pass the meme data
    navigation.navigate('Detail', { meme });
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
          style={styles.touchableWrapper}  // Apply styles here to maintain height
        >
          <Card meme={item} />
        </TouchableOpacity>
      }
    />
  );
};

const styles = StyleSheet.create({
  touchableWrapper: {
    flex: 1,  // Ensure that TouchableOpacity stretches to the size of its children
    justifyContent: 'center',  // Center content if necessary
    alignItems: 'center',  // Align items (optional)
  },
});

export default CustomCarousel;
