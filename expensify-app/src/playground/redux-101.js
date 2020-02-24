import { combineReducers, createStore } from 'redux';

const store = createStore((state = { count: 0 }, action) => {
    switch (action.type) {
        case 'INCREASE':
            return {
                count: state.count + 1
            };
        case 'DECREASE':
            return {
                count: state.count - 1
            };
        case 'RESET':
            return {
                count: 0
            };
        default:
            return {
                state
            };
    }
});

console.log(store.getState());

store.dispatch({
    type: 'INCREASE'
});

store.dispatch({
    type: 'INCREASE'
});

store.dispatch({
    type: 'RESET'
});

store.dispatch({
    type: 'DECREASE'
});

console.log(store.getState());