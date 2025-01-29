import React from 'react';
import { Dimensions, Text, View, Image, StyleSheet } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import Card from './Card';

const CustomCarousel = ({ data }: { data: string[] }) => {
  const width = Dimensions.get('window').width;
  
  return (
    <Carousel
      loop
      width={width}
      height={width}
      autoPlay
      data={data}
      scrollAnimationDuration={1000}
      onSnapToItem={(index: number) => console.log('current index:', index)}
      renderItem={({ item }: { item: string }) => 
        <Card imageUrl={item} />
      }
    />
  );
};

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
  },
  image: {
    width: '100%',
    height: '100%',
  },
});

export default CustomCarousel;
