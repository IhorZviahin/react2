import {useReducer} from "react";


// const init = (initCount) => {
//     return {count1: initCount, count2: initCount}
// }
const reducer = (state, action) => {
    console.log(action)
    switch (action.type) {
        case 'inc':
            return {...state, count1: state.count1 + 1}
        case 'dec':
            return {...state, count1: state.count1 - 1}
        case 'reset':
            return {...state, count1: 0}
        case 'set':
            return {...state, count1: action.payload}
        case 'inc2':
            return {...state, count2: state.count2 + 2}
        case 'dec2':
            return {...state, count2: state.count2 - 2}
        case 'reset2':
            return {...state, count2: 0}
        case 'set2':
            return {...state, count2: action.payload}
        case 'inc3':
            return {...state, count3: state.count3 + 44}
        case 'dec3':
            return {...state, count3: state.count3 - 33}
        case 'reset3':
            return {...state, count3: 0}
        case 'set3':
            return {...state, count3: action.payload}
    }
}


function App() {

    const [state, dispatch] = useReducer(reducer, {count1: 0, count2: 0, count3: 0});

    // const inc = () => {
    // dispatch({type: 'inc'})
    // }
    // const dec = () => {
    //     dispatch({type: 'dec'})
    // }
    // const reset = () => {
    //     dispatch({type: 'reset'})
    // }


    return (
        <div>
            {state.count1}
            <button onClick={() => dispatch({type: 'inc'})}>inc</button>
            <button onClick={() => dispatch({type: 'dec'})}>dec</button>
            <button onClick={() => dispatch({type: 'reset'})}>reset</button>
            <button onClick={() => dispatch({type: 'set', payload: 10})}>to10</button>

            <hr/>
            {state.count2}
            <button onClick={() => dispatch({type: 'inc2'})}>inc</button>
            <button onClick={() => dispatch({type: 'dec2'})}>dec</button>
            <button onClick={() => dispatch({type: 'reset2'})}>reset</button>
            <button onClick={() => dispatch({type: 'set2', payload: 20})}>to20</button>

            <hr/>
            {state.count3}
            <button onClick={() => dispatch({type: 'inc3'})}>inc</button>
            <button onClick={() => dispatch({type: 'dec3'})}>dec</button>
            <button onClick={() => dispatch({type: 'reset3'})}>reset</button>
            <button onClick={() => dispatch({type: 'set3', payload: 121})}>to121</button>

        </div>
    );
}

export default App;
