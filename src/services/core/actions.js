import {ADD_INCOME_EXPENSE, UPDATE_INCOME_EXPENSE, DELETE_INCOME_EXPENSE} from './actionTypes';

export const addIncomeExpense = (data) => dispatch=>{
    dispatch({ type: ADD_INCOME_EXPENSE, payload:data })
}
export const updateIncomeExpense = (data) => dispatch => {
    dispatch({ type: UPDATE_INCOME_EXPENSE, payload:data })
}

export const deleteIncomeExpense = (data) => dispatch => {
    dispatch({ type: DELETE_INCOME_EXPENSE, payload:data })
}
