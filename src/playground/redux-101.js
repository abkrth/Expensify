import { createStore } from 'redux';

// Action generators - Functions that return action objects
const incrementCount = ({ incrementBy = 1 } = {}) => ({
    type: 'INCREMENT',
    incrementBy
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
    type: 'DECREMENT',
    decrementBy
});

const setCount = ({count} = {}) => ({
    type: 'SET',
    count
});

const resetCount = () => ({
    type: 'RESET'
});


// Reducers
// 1. Reducers are pure functions. (Output is purely based on input, it does use anything outside of function scope)
// 2. Never change state or action (we do not directyly change the state which is given as input parameter, instead we return an object which denotes the new state)

const countReducer = (state = { count: 0}, action) => {
    switch (action.type)    {
        case 'INCREMENT':
            return {
                count: state.count + action.incrementBy
            };
        case 'DECREMENT':
            return {
                count: state.count - action.decrementBy
            };
        case 'SET':
            return {
                count: action.count
            }
        case 'RESET':
            return {
                count: 0
            };
        default:
            return state;
    }
};


const store = createStore(countReducer);


// store.subscribe() is a function which watches for changes in redux store, it takes another function as argument,
// this argument function runs everytime the store changes, i.e., the state of redux store changes
// the return value of store.subscribe() is a function which can be called for unsubscribing from watching for changes in the redux store
const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
});


// Actions - an object that gets sent to the store,
//           this object describes the type of action we want to take

// Just like calling an action, in this case 'INCREMENT'
// store.dispatch({
//     type: 'INCREMENT'  // convection of redux to use capital-letters (not enforced)
// });

store.dispatch(incrementCount());

store.dispatch(incrementCount({ incrementBy: 5}));

store.dispatch(resetCount());

store.dispatch(decrementCount());

store.dispatch(decrementCount({ decrementBy: 10 }));

store.dispatch(setCount({ count: 69 }));