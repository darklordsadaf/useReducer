import React, { useReducer } from 'react';

const initialState = { count: 0 }

const reducer = (state, action) => {
    // console.log(state, action)
    switch (action.type) {
        case 'INCREMENT':
            return { count: state.count + 1 }
        case 'DECREMENT':
            return { count: state.count - 1 }
        case 'RESET':
            return { count: 0 }
        default:
            return state;
    }
}
const ReducerCount = () => {
    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <div>
            <h1>This is Ruducer Count: {state.count}</h1>
            <button onClick={() => dispatch({ type: 'INCREMENT' })}>Increment</button>
            <br />
            <button onClick={() => dispatch({ type: 'DECREMENT' })}> Decrement</button>
            <br />
            <button onClick={() => dispatch({ type: 'RESET' })}>Reset</button>
        </div>
    );
};

export default ReducerCount;