/* Date      : 29-05-2021
/* Creator   : ABDUL BASITH A */
/* Email     : ambalavanbasith@gmail.com */
/* github    : abdulbasitha */
import React from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from "react-native";
import { theme } from "../../../constants";

const DetailsView = ({ formData, action }) => (
    <View style={styles.container}>
        <View style={styles.amountLabelContainer}>
            <Text style={[styles.amountStyle, formData?.type == "Income" ? styles.incomeLabel : styles.expenseLabel]}>${formData?.amount}</Text>
        </View>

        <View style={styles.descriptionContainer}>
            <Text style={styles.descriptionLabel}>{formData?.description}</Text>
            <Text style={[styles.dateLabel, styles.marginTop]}>{formData?.date}</Text>
        </View>

        <View style={styles.actionContainer}>
            <TouchableOpacity
                onPress={() => action('EDIT')}
                activeOpacity={0.5}
                hitSlop={styles.hitSlop}
                style={styles.marginBottom}>
                <Text style={styles.editTextLabel}>Edit</Text>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={() => action('DELETE')}
                activeOpacity={0.5}
                hitSlop={styles.hitSlop}
                style={styles.marginTop}>
                <Text style={styles.deleteTextLabel}>Delete</Text>
            </TouchableOpacity>
        </View>

    </View>
)
export default DetailsView;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        marginVertical: theme.sizes.padding
    },
    amountLabelContainer: {
        flex: 2,
    },
    descriptionContainer: {
        alignItems: "center",
        flex: 3
    },
    actionContainer: {
        flex: 10,
        alignItems: 'center',
    },
    amountStyle: {
        fontSize: theme.sizes.base2 * 2,
        fontWeight: "bold",
        color: theme.colors.green,
    },
    expenseLabel: {
        color: theme.colors.red,
    },
    incomeLabel: {
        color: theme.colors.green,
    },
    descriptionLabel: {
        color: theme.colors.lightBack,
        fontSize: theme.sizes.base3,
    },
    dateLabel: {
        color: theme.colors.lightBack
    },

    editTextLabel: {
        color: theme.colors.primary,
        fontWeight: "bold"
    },
    deleteTextLabel: {
        color: theme.colors.lightBack
    },
    hitSlop: {
        top: theme.sizes.padding3,
        bottom: theme.sizes.padding3,
        left: theme.sizes.padding3,
        right: theme.sizes.padding3
    },
    marginTop: {
        marginTop: theme.sizes.padding1
    },
    marginBottom: {
        marginBottom: theme.sizes.padding1
    }
});