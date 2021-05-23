/* Date      : 23-05-2021
/* Creator   : ABDUL BASITH A */
/* Email     : ambalavanbasith@gmail.com */
/* github    : abdulbasitha */

import React from 'react'
import { View, Text, SafeAreaView,StyleSheet } from 'react-native'
import Home from './screens/Home';
import RootNavigator from './navigation'
const TrackIt = () => {
    return (
        <SafeAreaView style={styles.container}>
            <RootNavigator />
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
  });
export default TrackIt;