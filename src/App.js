import {useReducer, useState} from "react";

import "./wrapper.css"

const reduser = (state, action) => {

    console.log(action)
    switch (action.type) {
        case 'addCats':
            return {...state, cats: [...state.cats, {name: action.payload, id: Date.now()}]}
        case 'delCats':
            return {...state, cats: state.cats.filter( cat => cat.id!==action.payload)}
        case 'addDogs':
            return {...state,dogs: [...state.dogs, {name: action.payload, id: Date.now()}]}
        case 'delDogs':
            return {...state, dogs: state.dogs.filter( cat => cat.id!==action.payload)}
        default:
            console.error("невідомий тип!")
            return state
    }
}
function App() {

    const [state, dispatch] = useReducer(reduser, {cats: [], dogs: []})

    const [catsValue, setCatsValue] = useState('')
    const [dogsValue, setDogsValue] = useState('')

    const saveCat = () => {
        dispatch({type: 'addCats', payload: catsValue})
        setCatsValue("")
    }
    const saveDog = () => {
        dispatch({type: 'addCats', payload: dogsValue})
        setDogsValue("")
    }

    return (
        <div>
            <div className={"wrapper"}>
                <div>

                    <label>Cats: <input type="text" onChange={({target}) => {
                        setCatsValue(target.value)
                    }}/></label>
                    <button onClick={() => saveCat()}> save</button>
                </div>

                <div>
                    <label>Dogs: <input type="text" onChange={({target}) => {
                        setDogsValue(target.value)
                    }}/></label>
                    <button onClick={() => saveDog()}> save</button>
                </div>
            </div>
            <hr/>

            <div>

                <div className={"wrapper2"}>

                    <div>
                        {
                            state.cats.map(cat => (
                                <div key={cat.id}>{cat.name}
                                    <button onClick={() => dispatch({type:'delCats', payload:cat.id})}>delete</button>
                                </div>
                            ))
                        }
                    </div>

                    <div>
                        {
                            state.dogs.map(dog => (
                                <div key={dog.id}>{dog.name}
                                    <button onClick={() => dispatch({type:'delDogs', payload:dog.id})}>delete</button>
                                </div>
                            ))
                        }
                    </div>

                </div>
            </div>

        </div>
    );
}

export default App;
