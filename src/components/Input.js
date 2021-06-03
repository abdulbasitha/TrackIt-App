import React, { useState } from "react";
import {
    View,
    Text,
    StyleSheet,
    TextInput
} from "react-native";
import { theme } from "../constants";

const Input = (props) => {
    const [focus, setFocus] = useState(false)
    const { error, style } = props
    const inputStyles = [
        styles.container,
        error && { borderColor: theme.colors.accent },
        style
    ];
    return (
        <TextInput
            onBlur={() => setFocus(false)}
            onFocus={() => setFocus(true)}
            style={[inputStyles, (!error && focus) && styles.onFocusStyle]}
            {...props}
        />
    )
}
export default Input;

const styles = StyleSheet.create({
    container: {
        padding: 12,
        borderWidth: 1,
        borderColor: theme.colors.gray,
        borderRadius: theme.sizes.padding4 * 0.5,
    },
    onFocusStyle: {
        borderColor: theme.colors.primary
    }
});