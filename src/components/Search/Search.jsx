import React from 'react';
import './Search.css'

const Search = ({searchValue, setSearchValue}) => {
    return (
        <div className='root'>
            <input
                className='input'
                placeholder='Поиск города'

                value={searchValue}
                onChange={(event) => setSearchValue(event.target.value)}
            />
            

        </div>
    );
};

export default Search;