// Carousel.js

import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import Carousel from 'react-native-snap-carousel';

const Carousel = ({ images }) => {
  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Image source={{ uri: item.uri }} style={styles.image} />
    </View>
  );

  return (
    <View style={styles.container}>
      <Carousel
        data={images}
        renderItem={renderItem}
        sliderWidth={300}
        itemWidth={300}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  item: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 250,
    height: 250,
    borderRadius: 10,
  },
});

export default Carousel;