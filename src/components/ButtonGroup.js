/* Date      : 27-05-2021
/* Creator   : ABDUL BASITH A */
/* Email     : ambalavanbasith@gmail.com */
/* github    : abdulbasitha */
import React from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    TouchableWithoutFeedback,
    Alert
} from "react-native";
import { theme } from "../constants";

const ButtonGroup = (props) => {
    const {buttons, selectedIndex, onPress } = props
    const buttonContainerStyle = props?.buttonContainerStyle || styles.buttonContainerStyle
    const selectedButtonStyle = props?.selectedButtonStyle || styles.selectedButtonStyle
    const textStyle = props?.textStyle || styles.textStyle
    const selectedTextStyle = props?.textStyle || styles.selectedTextStyle
    const  borderCornerRadius = {
        leftCorner:[{borderTopLeftRadius: props?.borderCornerRadius || theme.sizes.padding4 * 0.5,
                    borderBottomLeftRadius: props?.borderCornerRadius || theme.sizes.padding4 * 0.5}],
        rightCorner:[{borderTopRightRadius: props?.borderCornerRadius || theme.sizes.padding4 * 0.5,
                    borderBottomRightRadius: props?.borderCornerRadius || theme.sizes.padding4 * 0.5,}],
    }
    const renderCornerRadius = (index)=> {
        if (index == 0)
            return [borderCornerRadius.leftCorner]
        else if (index == buttons?.length - 1)
            return [borderCornerRadius.rightCorner]
        else
            return;
    }
    return (
        <View style={styles.container}>
            {buttons && buttons.map((name, index) =>
                <TouchableWithoutFeedback
                    key={`button-group-id-${index}`}
                    onPress={() => onPress(index)}
                >
                    <View style={[buttonContainerStyle, index == selectedIndex && selectedButtonStyle, renderCornerRadius(index)]}>
                        <Text style={[textStyle, index == selectedIndex ? selectedTextStyle : null]}>{name}</Text>
                    </View>
                </TouchableWithoutFeedback>
            )}
        </View>
    )
}
export default ButtonGroup;

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: "row",
    },
    buttonContainerStyle: {
        padding: theme.sizes.padding2,
        backgroundColor: theme.colors.border,
    },
    selectedButtonStyle: {
        backgroundColor: theme.colors.primary,
    },
    textStyle: {
        color: theme.colors.lightBack
    },
    selectedTextStyle: {
        color: "white",
    },

});