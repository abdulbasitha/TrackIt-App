import {TOAST_SUCCESS_MESSAGE, TOAST_WARNING_MESSAGE, TOAST_ERROR_MESSAGE, TOAST_DISMISS_ALL } from './actionTypes';

export const toastSuccess = (data) => dispatch=>{
    console.log("Here action")
    dispatch({ type: TOAST_SUCCESS_MESSAGE, payload:data})
}
export const toastError = (data) => dispatch=>{
    dispatch({ type: TOAST_ERROR_MESSAGE, payload:data})
}
export const toastDismissAll = (data) => dispatch=>{
    dispatch({ type: TOAST_DISMISS_ALL, payload:data})
}

export const toastWarning = (data) => dispatch=>{
    dispatch({ type: TOAST_WARNING_MESSAGE, payload:data})
}