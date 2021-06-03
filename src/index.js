import React from 'react'
import { View, Text, SafeAreaView, StyleSheet } from 'react-native'
import Home from './screens/Home';
import RootNavigator from './navigation'
import { theme } from './constants';
import store from './services/store';
import { Provider } from 'react-redux';
import { persistStore, persistReducer } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'
const persistedStore = persistStore(store)
const TrackIt = () => {
  return (

    <View style={styles.container}>
      <SafeAreaView style={styles.StatusBarStyle} />
      <SafeAreaView style={styles.container}>
        <Provider store={store}>
          <PersistGate persistor={persistedStore} loading={null}>
            <RootNavigator />
          </PersistGate>
        </Provider>
      </SafeAreaView>
    </View>

  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.lightGray
  },
  StatusBarStyle: {
    backgroundColor: theme.colors.primary
  }
});
export default TrackIt;