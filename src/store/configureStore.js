import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import expensesReducer from '../reducers/expenses';
import filtersReducer from '../reducers/filters';
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
    const store = createStore(
        combineReducers({
            expenses: expensesReducer,          // expenses property of the state is managed by expensesReducer
            filters: filtersReducer             // filters property of the state is managed by filtersReducer
        }),
        composeEnhancers(applyMiddleware(thunk))
    );
    return store;
};


