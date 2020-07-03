import React, { useState, useEffect } from 'react'
import axios from 'axios';
import CharacterItem from './CharacterItem';
import Search from '../ui/Search';
import Spinner from '../ui/Spinner';

const Characters = () => {

    const [characters, setCharacters] = useState([]);
    const [searchKey, setSearchKey] = useState('');
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        const getCharacters = async () => {
            setIsLoading(true);
            const response = await axios.get(`https://www.breakingbadapi.com/api/characters?name=${searchKey}`);
            setCharacters(response.data);
            setIsLoading(false);
        }
        getCharacters();
    }, [searchKey]);

    return (
        <>
            <Search getSearchKey={(text) => setSearchKey(text)} />

            {isLoading ? <Spinner /> :

                <div className="grid sm:grid-cols-1 md:grid-cols-2 grid-flow-row gap-4 content-center">
                    {
                        characters.map((character) => (
                            <CharacterItem key={character.char_id} character={character} />
                        ))
                    }
                </div>
            }
        </>
    )
}

export default Characters;
