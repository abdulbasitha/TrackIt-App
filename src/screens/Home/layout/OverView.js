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
import { theme } from "../../../constants";
import Icon from 'react-native-remix-icon';

const OverView = (props) => {
    const renderPriceColor = (color) => {
        return { color: color }
    }
    return (
        <View style={styles.container}>
            <View style={styles.boxStyle}>
                <View style={styles.boxItemsContainer}>
                    <View style={styles.boxItem}>
                        <Text style={styles.textStyle}> Balance</Text>
                        <Text style={[styles.priceTextStyle, renderPriceColor(theme.colors.blue)]}> $3000</Text>
                    </View>
                    <View style={styles.divider} />
                    <View style={styles.boxItem}>
                        <View style={[styles.boxItem, styles.boxItemPadding]}>
                            <Text style={styles.textStyle}>Income</Text>
                            <Text style={[styles.priceTextStyle, renderPriceColor(theme.colors.green)]}> $400</Text>
                        </View>
                        <View style={styles.boxItem}>
                            <Text style={[styles.priceTextStyle, renderPriceColor(theme.colors.red)]}> $4000</Text>
                            <Text style={styles.textStyle}> Expense</Text>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
}
export default OverView;

const styles = StyleSheet.create({
    container: {
        backgroundColor: theme.colors.white,
        padding: theme.sizes.base2
    },
    boxStyle: {
        borderColor: theme.colors.lightBack,
        borderWidth: StyleSheet.hairlineWidth,
        justifyContent: "center",
        borderRadius: theme.sizes.base * 0.5,
        padding: theme.sizes.base2
    },
    boxItemsContainer: {
        flexDirection: "row",
        justifyContent: "space-evenly",
    },
    boxItem: {
        justifyContent: "center",
        alignItems: "center",
    },
    boxItemPadding: {
        paddingBottom: theme.sizes.base3
    },
    divider: {
        borderWidth: 1,
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: theme.colors.lightBack,
    },
    textStyle: {
        fontSize: theme.sizes.caption,
        color: theme.colors.lightBack
    },
    priceTextStyle: {
        fontSize: theme.sizes.caption * 2,
        fontWeight:"bold"
    }

});