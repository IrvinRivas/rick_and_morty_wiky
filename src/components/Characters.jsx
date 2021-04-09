import React, {useState, useReducer, useMemo, useRef, useCallback} from 'react';
import plusIcon from '../assets/static/plus-flat.png'
import Search from './Search';

import useCharacters from "../hooks/useCharacters";

const initialState = {
    favorites: []
}

const API = 'https://rickandmortyapi.com/api/character';


const favoriteReducer = (state,action) => {
    switch(action.type) {
        case 'ADD_TO_FAVORITE':
            return  {
                ...state,
                favorites: [...state.favorites, action.payload]
            };

            default: return state;
    }
}

const Characters = () => {
    const [favorites, dispatch] = useReducer(favoriteReducer,initialState)
    const [search, setSearch] = useState('');
    const searchInput = useRef(null);

    const characters = useCharacters(API)

    

    const handleClick = favorite => {
        for (let i = 0; i < favorites.favorites.length; i++) {
            if (favorites.favorites[i].id === favorite.id) {
                return false;
            } 
        }

        dispatch({ type: 'ADD_TO_FAVORITE', payload: favorite})
    }

    /* const handleSearch = () => {
        setSearch(searchInput.current.value);
    } */

    const handleSearch = useCallback(() => {
        setSearch(searchInput.current.value);
    },[])

    /* const filteredUsers = characters.filter((user) => {
        return user.name.toLowerCase().includes(search.toLowerCase())
    }) */

    const filteredUsers = useMemo(() => 
        characters.filter((user) => {
            return user.name.toLowerCase().includes(search.toLowerCase())
        }),

        [characters, search]
    )

    return(
        <>

        <Search search={search} searchInput={searchInput} handleSearch={handleSearch}/>

        {favorites.favorites.length > 0 ?
            <div className="favorites">
                <h1>Tus favoritos</h1>
                {favorites.favorites.map(favorite => (
                    <li key={'favorite'+favorite.id}>{favorite.name}</li>
                ))}
            </div>
            :
            <h1>Añade a tus personajes favoritos</h1>
        }

        <div className="characters">
            {filteredUsers.map(character => (
                <>
                <div className="character-card" key={character.id}>
                    <img className="card-img" src={character.image} alt=""/>
                    <h2 className="card-name">{character.name}</h2>
                    <div className="character-card__text">
                        <p><strong>Estado:</strong> {character.status}</p>
                        <p><strong>Origen:</strong> {character.origin.name}</p>
                        <p><strong>Especie:</strong> {character.species}</p>
                        <p><strong>Estado:</strong> {character.gender}</p>
                        <img 
                            src={plusIcon} 
                            alt="" 
                            className="plus-icon"
                            onClick={() => handleClick(character)}
                        />
                        <p className="plus-icon__message">añadir a favoritos</p>
                    </div>
                </div>
                </>
            ))}
        </div>
        </>
    )
}

export default Characters;