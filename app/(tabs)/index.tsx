import { StyleSheet } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import MapComponent from '@/components/MapComponent';

export default function MapScreen() {
  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title">Map</ThemedText>
      <MapComponent />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
