/* Date      : 27-05-2021
/* Creator   : ABDUL BASITH A */
/* Email     : ambalavanbasith@gmail.com */
/* github    : abdulbasitha */
/* More Info : https://techzia.in */
import React, { useState } from "react";
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    Alert
} from "react-native";
import { theme } from "../../../constants";
import { ButtonGroup } from '../../../components'

const AddEditView = (props) => {
    const [option, setOption] = useState(0)
    return (
        <View style={styles.container}>

            <ButtonGroup
                buttons={["Income", "Expense"]}
                selectedIndex={option}
                onPress={setOption}
            />
            <View style={styles.inputContainerStyle}>
                <TextInput
                    style={styles.inputStyle}
                    autoCapitalize={false}
                    autoCorrect={false}
                    placeholder={"Amount"}
                    placeholderTextColor={theme.colors.gray}
                />
            </View>
            <View style={styles.inputContainerStyle}>
                <TextInput
                    style={styles.inputStyle}
                    autoCapitalize={false}
                    autoCorrect={false}
                    placeholder={"Description"}
                    placeholderTextColor={theme.colors.gray}
                />
            </View>
            <View style={styles.inputContainerStyle}>
                <TextInput
                    style={styles.inputStyle}
                    autoCapitalize={false}
                    autoCorrect={false}
                    placeholder={"Date"}
                    placeholderTextColor={theme.colors.gray}
                />
            </View>
            <TouchableOpacity
            activeOpacity={0.5}
            onPress={()=>Alert.alert("Submit")}
            hitSlop={{
                top: theme.sizes.padding3,
                bottom: theme.sizes.padding3,
                left: theme.sizes.padding3,
                right: theme.sizes.padding3
             }}
             style={styles.submitTextContainerStyle}>
                <Text style={styles.submitTextStyle}>Save</Text>
            </TouchableOpacity>



        </View>
    )
}
export default AddEditView;

const styles = StyleSheet.create({
    container: {

        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: theme.sizes.padding2 * 2,
        paddingHorizontal: theme.sizes.padding2 * 2
    },
    inputContainerStyle: {
        paddingTop: theme.sizes.base1 * 1.5,
        width:"100%",
    },
    inputStyle: {

        padding: theme.sizes.base1 * 1.5,
        borderWidth: 1,
        borderColor: theme.colors.gray,
        borderRadius: theme.sizes.padding4 * 0.5,

    },
    submitTextContainerStyle:{
       alignItems:"center",
       paddingTop:theme.sizes.padding
    },
    submitTextStyle:{
        color:theme.colors.primary
    }
});