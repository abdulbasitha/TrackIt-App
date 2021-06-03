import React from "react";
import { NavigationContainer, } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Header} from '../components'
import * as SCREENS from '../screens'
import * as SCREEN_NAMES from "./screen_names";
const Stack = createStackNavigator();
export default function RootNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={SCREEN_NAMES.HOME}
        screenOptions={{
          header: () => <Header />,
        }}
      >
        <Stack.Screen name={SCREEN_NAMES.HOME} component={SCREENS.Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
