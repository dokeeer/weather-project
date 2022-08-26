import React from 'react';
import './Search.css'

const Search = ({searchValue,setSearchValue}) => {
    const [input, setInput] = React.useState('Moscow')
    const handleSubmit = (e) => {
        e.preventDefault()
        setSearchValue(input.trim())
    }
    return (
        <div className='root'>
            <form onSubmit={handleSubmit}>
                <input
                    type='text'
                    className='input'
                    placeholder='Поиск города'
                    value={input}
                    onChange={(event) => {
                        event.preventDefault()
                        setInput(event.target.value)
                        console.log(input)
                        console.log(searchValue)
                    }}
                />
                <input type='submit' hidden/>
            </form>
        </div>
    );
};

export default Search;