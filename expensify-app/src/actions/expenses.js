import { v4 as uuidv4 } from 'uuid'

// ADD_EXPENSE
export const addExpense = (
    {
        description = '',
        note = '',
        amount = 0,
        date = 0
    } = {}
) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuidv4(),
        description,
        note,
        amount,
        date
    }
});

// EDIT_EXPENSE
export const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
});

// REMOVE_EXPENSE
export const removeExpense = (id) => ({
    type: 'REMOVE_EXPENSE',
    id
});