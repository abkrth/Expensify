import { createStore, combineReducers } from 'redux';
import expensesReducer from '../reducers/expenses';
import filtersReducer from '../reducers/filters';

export default () => {
    const store = createStore(
        combineReducers({
            expenses: expensesReducer,          // expenses property of the state is managed by expensesReducer
            filters: filtersReducer             // filters property of the state is managed by filtersReducer
        }),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
    return store;
};


