import { ADD_INCOME_EXPENSE, UPDATE_INCOME_EXPENSE, DELETE_INCOME_EXPENSE } from './actionTypes'
import { incomeExpenseCalculate } from '../../helpers'
const initialState = {
    balance: 0,
    income: 0,
    expense: 0,
    data: []
}
export default function (state = initialState, actions) {
    switch (actions.type) {


        case ADD_INCOME_EXPENSE:
            let data = []
            const checkDate = state.data.find(items => items.date == actions.payload.date)
            let incomeExpense;
            if (checkDate) {
                data = state.data.map(item => item.date == checkDate.date ? {
                    date: item.date, data:
                        item.data.concat({
                            id: actions.payload.id,
                            type: actions.payload.type,
                            description: actions.payload.description,
                            amount: actions.payload.amount,
                        })
                } : item)

            } else {
                data = state.data.concat({
                    date: actions.payload.date, data: [
                        {
                            id: actions.payload.id,
                            type: actions.payload.type,
                            description: actions.payload.description,
                            amount: actions.payload.amount,
                        }
                    ]
                })
            }

            incomeExpense = incomeExpenseCalculate(data)
            return {
                ...state,
                balance: incomeExpense.income - incomeExpense.expense,
                income: incomeExpense.income,
                expense: incomeExpense.expense,
                data: data
            }


        case UPDATE_INCOME_EXPENSE:
            let items = state?.data?.filter(items => (items.date == actions.payload.date))
            if (items.length) {
                let update_item = (items[0].data.filter(item => (item.id == actions.payload.id)))
                if (update_item.length) {
                    update_item = update_item[0]
                    update_item['amount'] = actions.payload.amount
                    update_item['description'] = actions.payload.description
                    update_item['type'] = actions.payload.type
                    incomeExpense = incomeExpenseCalculate(state.data)
                    return {
                        ...state,
                        balance: incomeExpense.income - incomeExpense.expense,
                        income: incomeExpense.income,
                        expense: incomeExpense.expense,
                    }
                } else {
                    data = state.data.filter(({ data }) => (
                        data.some(({ id }) => id != actions.payload.id)
                    ));
                    data = data.map(item => item.date == actions.payload.date ? {
                        date: item.date, data:
                            item.data.concat({
                                id: actions.payload.id,
                                type: actions.payload.type,
                                description: actions.payload.description,
                                amount: actions.payload.amount,
                            })
                    } : item)
                    incomeExpense = incomeExpenseCalculate(data)
                    return {
                        ...state,
                        balance: incomeExpense.income - incomeExpense.expense,
                        income: incomeExpense.income,
                        expense: incomeExpense.expense,
                        data: data
                    }
                }
            } else {
                data = state.data.filter(({ data }) => (
                    data.some(({ id }) => id != actions.payload.id)
                ));
                data = data.concat({
                    date: actions.payload.date, data: [
                        {
                            id: actions.payload.id,
                            type: actions.payload.type,
                            description: actions.payload.description,
                            amount: actions.payload.amount,
                        }
                    ]
                })
                incomeExpense = incomeExpenseCalculate(data)
                return {
                    ...state,
                    balance: incomeExpense.income - incomeExpense.expense,
                    income: incomeExpense.income,
                    expense: incomeExpense.expense,
                    data: data
                }
            }


        case DELETE_INCOME_EXPENSE:
            items = state?.data?.filter(items => (items.date == actions.payload.date))
            let removed_item = state?.data?.filter(items => (items.date != actions.payload.date))
            let remove_data = (items[0].data.filter(item => (item.id != actions.payload.id)))
            let result = []
            if (remove_data?.length) {
                result = (removed_item.concat({ date: actions.payload.date, data: remove_data }))
            } else {
                result = removed_item
            }
            incomeExpense = incomeExpenseCalculate(result)
            return {
                ...state,
                balance: incomeExpense.income - incomeExpense.expense,
                income: incomeExpense.income,
                expense: incomeExpense.expense,
                data: result
            }
        default:
            return state;
    }
}