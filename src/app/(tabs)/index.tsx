import { StyleSheet, View } from 'react-native';
import MapComponent from '@/components/MapComponent';
import MarkerTypes from '@/components/MarkerTypes';

export default function MapScreen() {
  return (
    <View style={styles.container}>
      {/* <MapComponent /> */}
      <MarkerTypes />/
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
});
