import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import PurposeScreen from './src/screens/PurposeScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <PurposeScreen />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
