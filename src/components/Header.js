/* Date      : 23-05-2021
/* Creator   : ABDUL BASITH A */
/* Email     : ambalavanbasith@gmail.com */
/* github    : abdulbasitha */
/* More Info : https://techzia.in */
import React from "react";
import {
    View,
    Text,
    StyleSheet
} from "react-native";
import { useRoute } from '@react-navigation/native';
import { theme } from "../constants";
const Header = (props) => {
    const route = useRoute();
    return (
        <View style={styles.container}>
            <Text style={styles.headerTextStyle}>{route?.name}</Text>
        </View>
    )
}
export default Header;

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 50,
        backgroundColor: theme.colors.primary
    },
    headerTextStyle: {
    color:theme.colors.white,
    fontWeight:"bold",
    fontSize: theme.sizes.h3
    }
});