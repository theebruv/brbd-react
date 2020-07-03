import React, { useState } from 'react'

const Search = ({getSearchKey}) => {

    const [searchKey, setSearchKey] = useState('');

    const onChange = (text) => {
        setSearchKey(text);
        getSearchKey(text);
    };

    return (
        <>
            <input
                className="border my-5 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Filter by character name"
                value={searchKey}
                onChange={(e) => onChange(e.target.value)}
                autoFocus
            />
        </>
    )
}

export default Search;
