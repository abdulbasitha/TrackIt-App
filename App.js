import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TrackIt from './src/index';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <TrackIt/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
