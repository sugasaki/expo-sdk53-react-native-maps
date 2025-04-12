import React from 'react';
import { StyleSheet, View } from 'react-native';
import MapView from 'react-native-maps';

const MapComponent: React.FC = () => {
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 35.6762,
          longitude: 139.6503,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        showsUserLocation={true}
        followsUserLocation={true}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
});

export default MapComponent;
