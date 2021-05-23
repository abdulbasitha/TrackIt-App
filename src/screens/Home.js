/* Date      : 23-05-2021
/* Creator   : ABDUL BASITH A */
/* Email     : ambalavanbasith@gmail.com */
/* github    : abdulbasitha */

import React from "react";
import {
    View,
    Text,
    StyleSheet
} from "react-native";
import { theme } from "../constants";

const Home = () => (
    <View style={styles.container}>
        <View style={styles.headerContainer}>
            <Text style>Hi</Text>
        </View>
        <View style={styles.statusContainer}>
        </View>
        <View style={styles.itemsContainer}>
        </View>
    </View>
)
export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    headerContainer:{
    flex: 1,
    alignItems:"center",
    justifyContent:"flex-end",
    backgroundColor:theme.colors.primary
    },
    statusContainer:{
        flex:3,
        backgroundColor:"red"
    },
    itemsContainer:{
        flex:5,
        backgroundColor:"green"
    }
});