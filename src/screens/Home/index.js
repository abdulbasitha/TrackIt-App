import React, { useState } from "react";
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    Alert
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import uuid from 'react-native-uuid';
import { FloatingButton, Model } from "../../components";
import { theme } from "../../constants";
import { OverView, ItemsView, AddEditView, DetailsView } from './layout'
import { addIncomeExpense, updateIncomeExpense, deleteIncomeExpense } from '../../services/core/actions'
import {sortByKey} from '../../helpers'

const Home = (props) => {
    const dispatch = useDispatch()
    const [IncomeExpense, setIncomeExpenseData] = useState({
        id: uuid.v4(),
        type: "Income",
        amount: "",
        description: "",
        date: ""
    })
    const [formMode, setFormMode] = useState('ADD')
    const [addEditModel, setAddEditModel] = useState(false)
    const [viewDetailsModel, setViewDetailsModel] = useState(false)
    const core = useSelector(state => state.core)
    const submitForm = () => {
        setAddEditModel(false)
        dispatch( formMode == "ADD" ? addIncomeExpense(IncomeExpense): updateIncomeExpense(IncomeExpense))
        _setDefault()
    }
    const _clickView = (data)=>{
        setIncomeExpenseData({
            id: data.id,
            type: data.type,
            amount: data.amount,
            description: data.description,
            date: data.date
        })
        setViewDetailsModel(true)
    }
    const _detailsActionHandler = (type)=>{
        setViewDetailsModel(false)
        if (type == "EDIT"){
            setFormMode("EDIT")
            setAddEditModel(true)

        }else {
            dispatch(deleteIncomeExpense(IncomeExpense))
            _setDefault()
        }
    }

    const _setDefault = ()=>{
        setFormMode("ADD")
        setViewDetailsModel(false)
        setAddEditModel(false)
        setIncomeExpenseData({
            id: uuid.v4(),
            type: "Income",
            amount: "",
            description: "",
            date: ""
        })
    }

    return (
        <View style={styles.container}>
            <View style={styles.statusContainer}>
                <OverView data={core} />
            </View>
                <ItemsView onPress={_clickView} data={sortByKey(core?.data, 'date', 'desc')} />
            <Model
                title={formMode == "ADD" ? "Add Income/Expense" : "Edit Income/Expense"}
                visible={addEditModel}
                onDismiss={() => _setDefault()}
            >
                <AddEditView
                    mode={formMode}
                    formData={IncomeExpense}
                    setFormData={setIncomeExpenseData}
                    submitForm={submitForm}
                    type={formMode}
                />

            </Model>

            <Model
            title={IncomeExpense?.type}
            visible={viewDetailsModel}
            onDismiss={() =>  _setDefault()}
            >
                <DetailsView formData={IncomeExpense} action={_detailsActionHandler}/>
            </Model>
            <FloatingButton onPress={() => setAddEditModel(true)} />
        </View>
    )
}
export default Home;
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
});