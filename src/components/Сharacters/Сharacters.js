import React, {useEffect, useState} from 'react';
import {useLocation} from "react-router-dom";
import {CharactersService} from "../../services";
import {Character} from "../Character/Character";

const Characters = () => {
    const {state} = useLocation();
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        CharactersService.getByCharactersList(state).then(({data}) => setCharacters(data))
    }, [])
    return (
        <div>
            {characters.map(character => <Character key={character.id} character={character}/>)}
        </div>
    );
};

export {Characters};