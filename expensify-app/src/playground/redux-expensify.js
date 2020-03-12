import { createStore, combineReducers } from 'redux'

const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

const store = createStore(expensesReducer);

console.log(store.getState());

const demoState = {
    expenses: [{
        id: 'lasdjfhaaf',
        description: 'January Rent',
        note: 'This was the final payment for this address',
        amount: 54500,
        date: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    }
};