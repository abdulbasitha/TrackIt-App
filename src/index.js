/* Date      : 23-05-2021
/* Creator   : ABDUL BASITH A */
/* Email     : ambalavanbasith@gmail.com */
/* github    : abdulbasitha */

import React from 'react'
import { View, Text, SafeAreaView,StyleSheet } from 'react-native'
import Home from './screens/Home';
import RootNavigator from './navigation'
import { theme } from './constants';
const TrackIt = () => {
    return (
      <View style={styles.container}>
        <SafeAreaView style={styles.StatusBarStyle} />
        <SafeAreaView style={styles.container}>
            <RootNavigator />
        </SafeAreaView>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor:theme.colors.lightGray
    },
    StatusBarStyle:{
      backgroundColor:theme.colors.primary
    }
  });
export default TrackIt;