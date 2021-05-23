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

const OverView = (props) => (
    <View style={styles.container}>
        <View style={styles.boxStyle}>
            <View style={styles.boxItemsContainer}>
                <View style={styles.boxItem}>
                    <Text> Balance</Text>
                    <Text> 3000</Text>
                </View>
                <View style={styles.divider}/>
                <View style={styles.boxItem}>
                    <View style={[styles.boxItem, styles.boxItemPadding]}>
                        <Text> Income</Text>
                        <Text> 400</Text>
                    </View>
                    <View style={styles.boxItem}>
                        <Text> 4000</Text>
                        <Text> Expense</Text>
                    </View>
                </View>
            </View>
        </View>
    </View>
)
export default OverView;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: theme.sizes.base2

    },
    boxStyle: {
        flex: 1,
        borderColor: theme.colors.lightBack,
        borderWidth: StyleSheet.hairlineWidth,
        justifyContent: "center",
        borderRadius:theme.sizes.base * 0.5
    },
    boxItemsContainer: {
        flex:1,
        flexDirection: "row",
        justifyContent: "space-evenly",
    },
    boxItem:{
        justifyContent:"center",
        alignItems:"center",
    },
    boxItemPadding:{
       paddingBottom:theme.sizes.base3
    },
    divider:{
        borderWidth:1,
        borderWidth: StyleSheet.hairlineWidth,
        borderColor:theme.colors.lightBack,
       marginVertical:theme.sizes.base1
    }

});