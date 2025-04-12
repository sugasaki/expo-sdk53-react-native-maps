import { StyleSheet, View } from 'react-native';
import MapComponent from '@/components/MapComponent';

export default function MapScreen() {
  return (
    <View style={styles.container}>
      <MapComponent />
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
