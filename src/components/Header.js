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
import { useRoute } from '@react-navigation/native';
import { theme } from "../constants";
const Header = (props) => {
    const route = useRoute();
    const {title, containerStyle, textStyle} = props
    const container = [containerStyle || styles.container]
    const headerTextStyle = [textStyle || styles.headerTextStyle]
    const tittleText =  title || route?.name

    return (
        <View style={container}>
            <Text style={headerTextStyle}>{tittleText}</Text>
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