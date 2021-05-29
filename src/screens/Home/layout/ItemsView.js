/* Date      : 25-05-2021
/* Creator   : ABDUL BASITH A */
/* Email     : ambalavanbasith@gmail.com */
/* github    : abdulbasitha */

import React from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    SectionList,
    ScrollView,

} from "react-native";
import { theme } from "../../../constants";
import moment from "moment";
const ItemsView = ({ data, onPress }) => {

    const _renderHeder = (date) => (
        <View style={styles.headerStyle}>
            <Text style={styles.ItemLabelTextStyle}>{date == moment().format('MMMM D, YYYY') ? 'Today' : date } </Text>
        </View>
    )

    const _renderItem = (data,date) => (
        <TouchableOpacity
            onPress={()=>onPress({...data,date:date})}
            activeOpacity={0.6}
            style={styles.ItemContainerStyle}>
            <Text style={styles.ItemLabelTextStyle }>{data?.description}</Text>
            <Text style={data?.type == "Income" ? styles.ItemLabelIncomeTextStyle:styles.ItemLabelExpenseTextStyle}>${data?.amount}</Text>
        </TouchableOpacity>
    )

    return (

        <View style={styles.container}>
            <SectionList
                stickySectionHeadersEnabled={true}
                showsVerticalScrollIndicator={false}
                sections={data}
                keyExtractor={(item, index) => index + item.id}
                renderSectionHeader={({ section: { date } }) => _renderHeder(date)}
                renderItem={({ item, section: { date}}) => _renderItem(item, date)}
            />
        </View>

    )
}
export default ItemsView;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: theme.sizes.base2,
    },
    headerStyle: {
        alignItems: "center",
        paddingTop: theme.sizes.base2 * 2
    },
    ItemContainerStyle: {
        flexDirection: "row",
        justifyContent: "space-between",
        padding: theme.sizes.base2,
        borderWidth: 1,
        borderColor: theme.colors.border,
        backgroundColor: theme.colors.white,
        borderRadius: theme.sizes.base * 0.5,
        marginTop: theme.sizes.base1
    },
    ItemLabelIncomeTextStyle: {
        color: theme.colors.green
    },
    ItemLabelExpenseTextStyle: {
        color: theme.colors.red
    },
});