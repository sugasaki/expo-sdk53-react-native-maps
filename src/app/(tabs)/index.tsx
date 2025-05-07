import React from 'react';
import { StyleSheet } from 'react-native';
import { ThemedView } from '@/components/ThemedView';
import MapComponent from '@/components/MapComponent';
import MarkerTypes from '@/components/MarkerTypes';
import CustomMarkers from '@/components/CustomMarkers';
import Callouts from '@/components/Callouts';

export default function MapScreen() {
  return (
    <ThemedView style={styles.container}>
      {/* <MapComponent /> */}
      <MarkerTypes />
      {/* <MarkerTypes /> */}
      {/* <CustomMarkers /> */}
      <Callouts />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
});
