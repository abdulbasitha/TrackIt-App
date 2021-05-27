/* Date      : 24-05-2021
/* Creator   : ABDUL BASITH A */
/* Email     : ambalavanbasith@gmail.com */
/* github    : abdulbasitha */
/* More Info : https://techzia.in */
import React from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from "react-native";
import Icon from 'react-native-remix-icon';
import { theme } from "../constants";
const FloatingButton = (props) => {
    const {icon, iconColor, iconSize ,containerStyle, buttonStyle } = props
    const container = [containerStyle || styles.container]
    const OpacityContainer = [ buttonStyle || styles.OpacityContainer]
    return (
        <View style={container}>
            <TouchableOpacity
                {...props}
                activeOpacity={0.5}
                style={OpacityContainer}>
                <Icon name={icon || "add-line"}
                size={iconSize || theme.sizes.base3 }
                color={theme.colors.white || iconColor} />
            </TouchableOpacity>
        </View>
    )
}
export default FloatingButton;
const styles = StyleSheet.create({
    container: {
        alignSelf: "center",
        justifyContent: "center",
        alignItems: "center"
    },
    OpacityContainer: {
        alignItems: "center",
        justifyContent: 'center',
        backgroundColor: theme.colors.primary,
        width: theme.sizes.base4 * 2,
        height: theme.sizes.base4 * 2,
        borderRadius: 20,
        position: "absolute",
        bottom: 10,
    }
});