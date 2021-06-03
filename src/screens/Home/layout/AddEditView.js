import React, { useState, useEffect } from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Alert,
    Platform
} from "react-native";
import { theme } from '../../../constants';
import { ButtonGroup, Input } from '../../../components'
import DateTimePickerModal from "react-native-modal-datetime-picker";
import moment from "moment";
import { removeItem } from "../../../helpers";
const buttonGroupOptions = ["Income", "Expense"]
const AddEditView = ({ setFormData, formData, submitForm, mode }) => {
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [errors, setError] = useState([])
    const hasErrors = key => errors.includes(key) ? true : false

    const validateForm = () => {
        const { type, amount, description, date } = formData;
        const temp_errors = []
        if (amount == "" || isNaN(amount))
            temp_errors.push('amount')
        if (description == "")
            temp_errors.push('description')
        if (date == "")
            temp_errors.push('date')
        setError(temp_errors)
        if (temp_errors.length == 0) {
            submitForm()
        } else {
            Alert.alert('Message', `${temp_errors.join(',')} ${temp_errors.length == 1 ? 'is required field':'are required fields'}`)
        }
    }
    const _onChangeTextValidate = (value, name) => {
        const temp_errors = errors
        if (name == 'amount') {
            if (isNaN(value) || value?.indexOf(' ') >= 0) {
                Alert.alert('Message', "Invalid amount, please enter a valid amount")
                setFormData({ ...formData, amount: '' });
            }
            isNaN(value) ? temp_errors.push('amount') : setError(removeItem(errors, 'amount'))
        }
        if (name == 'description')
            !value ? temp_errors.push('description') : setError(removeItem(errors, 'description'))
        if (name == 'date')
            !value ? temp_errors.push('date') : setError(removeItem(errors, 'date'))
        setError(temp_errors)
    }
    const _setDate = (date) => {
        setFormData({ ...formData, date: moment(date).format('MMMM D, YYYY') })
        setDatePickerVisibility(false)
    }
    return (
        <View style={styles.container}>
            <ButtonGroup
                buttons={buttonGroupOptions}
                selectedIndex={buttonGroupOptions?.indexOf(formData.type)}
                onPress={(index) => setFormData({ ...formData, type: buttonGroupOptions[index] })}
            />
            <View style={styles.inputContainerStyle}>
                <Input
                    error={hasErrors('amount')}
                    keyboardType={'numeric'}
                    autoCorrect={false}
                    placeholder={"Amount"}
                    placeholderTextColor={theme.colors.gray}
                    value={(formData?.amount).toString()}
                    onChangeText={value => {
                        setFormData({ ...formData, amount: value });
                        _onChangeTextValidate(value, 'amount')
                    }}
                />
            </View>
            <View style={styles.inputContainerStyle}>
                <Input
                    error={hasErrors('description')}
                    autoCorrect={false}
                    placeholder={"Description"}
                    value={(formData?.description).toString()}
                    placeholderTextColor={theme.colors.gray}
                    onChangeText={value => {
                        setFormData({ ...formData, description: value });
                        _onChangeTextValidate(value, 'description')
                    }}
                />
            </View>
            <View
                style={styles.inputContainerStyle}>
                <Input
                    onTouchStart={() => setDatePickerVisibility(true)}
                    error={hasErrors('date')}
                    autoCorrect={false}
                    placeholder={"Date"}
                    placeholderTextColor={theme.colors.gray}
                    value={(formData?.date).toString()}

                />
            </View>
            <TouchableOpacity
                activeOpacity={0.5}
                onPress={() => validateForm()}
                hitSlop={{
                    top: theme.sizes.padding3,
                    bottom: theme.sizes.padding3,
                    left: theme.sizes.padding3,
                    right: theme.sizes.padding3
                }}
                style={styles.submitTextContainerStyle}>
                <Text style={styles.submitTextStyle}>Save</Text>
            </TouchableOpacity>
            {Platform.OS == "ios" ?
                <DateTimePickerModal
                    mode="date"
                    display="inline"
                    textColor="black"
                    isVisible={isDatePickerVisible}
                    mode="date"
                    onConfirm={(date) => {
                        _setDate(date)
                        _onChangeTextValidate(date, 'date')
                    }}
                    onCancel={() => {
                        setDatePickerVisibility(false)
                        _onChangeTextValidate(null, 'date')
                    }}

                /> :
                <DateTimePickerModal
                    textColor="black"
                    isVisible={isDatePickerVisible}
                    mode="date"
                    onConfirm={(date) => _setDate(date)}
                    onCancel={() => setDatePickerVisibility(false)}
                />
            }
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
        width: "100%",
    },

    submitTextContainerStyle: {
        alignItems: "center",
        marginTop: theme.sizes.padding
    },
    submitTextStyle: {
        color: theme.colors.primary
    },
    pickerContainerStyleIOS: {
        backgroundColor: theme.colors.gray
    },

});