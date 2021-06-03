export const sortByKey = (data, key, type = 'asc') => {
    const sorted = [].concat(data)
        .sort((a, b) => a[key] > b[key] ? 1 : -1)
    if (type == 'asc')
        return sorted;
    else
        return sorted.reverse()
}
export const removeItem = (data, key)=>{
    const array = data
    const index = array.indexOf(key);
    if (index > -1) {
        array.splice(index, 1);
    }
    return array

}
export const incomeExpenseCalculate = (data) => {
    let income = 0
    let expense = 0
    data.forEach(items => {
        items.data.forEach(item => {
            if (item.type == "Income")
                income += Number(item.amount)
            else
                expense += Number(item.amount)

        })
    })
    return { income: income, expense: expense }
}

