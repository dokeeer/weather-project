import React from 'react';
import './Search.css'

const Search = ({searchValue, setSearchValue}) => {
    const [input, setInput] = React.useState('')
    return (
        <div className='root'>
            <form onSubmit={setSearchValue(input)}>
            <input
                className='input'
                placeholder='Поиск города'
                value={input}
                onChange={(event) => setInput(event.target.value)}
            />
            </form>
        </div>
    );
};

export default Search;