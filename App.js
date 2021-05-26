import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { theme } from './src/constants';
import TrackIt from './src/index';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <TrackIt/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

});
