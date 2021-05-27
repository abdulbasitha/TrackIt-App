/* Date      : 25-05-2021
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
import { theme } from "../../../constants";

const ItemsView = (props) => (
    <View style={styles.container}>
        <View style={styles.itemsStyle}>
            <View style={styles.headerStyle}>
                <Text style={styles.ItemLabelTextStyle}>Today</Text>
            </View>
            <TouchableOpacity
                activeOpacity={0.6}
                style={styles.ItemContainerStyle}>
                <Text style={styles.ItemLabelTextStyle}>Car</Text>
                <Text>$319</Text>
            </TouchableOpacity>
            <TouchableOpacity
                activeOpacity={0.6}
                style={styles.ItemContainerStyle}>
                <Text style={styles.ItemLabelTextStyle}>Car</Text>
                <Text>$319</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.itemsStyle}>
            <View style={styles.headerStyle}>
                <Text style={styles.ItemLabelTextStyle}>Today</Text>
            </View>
            <TouchableOpacity
                activeOpacity={0.6}
                style={styles.ItemContainerStyle}>
                <Text style={styles.ItemLabelTextStyle}>Car</Text>
                <Text>$319</Text>
            </TouchableOpacity>
            <TouchableOpacity
                activeOpacity={0.6}
                style={styles.ItemContainerStyle}>
                <Text style={styles.ItemLabelTextStyle}>Car</Text>
                <Text>$319</Text>
            </TouchableOpacity>
        </View>
    </View>
)
export default ItemsView;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: theme.sizes.base2,
    },
    headerStyle: {
        alignItems: "center",
    },
    itemsStyle:{
        paddingTop:theme.sizes.base2 * 2
    },
    ItemContainerStyle: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        padding: theme.sizes.base2,
        borderWidth: 1,
        borderColor: theme.colors.border,
        backgroundColor: theme.colors.white,
        borderRadius: theme.sizes.base * 0.5,
        marginTop: theme.sizes.base1
    },
    ItemLabelTextStyle: {
        color: theme.colors.lightBack
    }
});