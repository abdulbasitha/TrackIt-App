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
import { theme } from "../../constants";
import OverView from './layout/OverView'
const Home = () => (
    <View style={styles.container}>
        <View style={styles.statusContainer}>
            <OverView/>
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
    statusContainer: {
        flex: 2,
       
    },
    itemsContainer: {
        flex: 6,
        backgroundColor: "green"
    }
});