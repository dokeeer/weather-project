import React from 'react';
import './Search.css'

const Search = ({searchValue,setSearchValue}) => {
    const [input, setInput] = React.useState('Moscow')
    const handleSubmit = (e) => {
        e.preventDefault()
        setSearchValue(input.trim())
    }
    return (
        <div className='myForm'>
            <form onSubmit={handleSubmit} className='thisForm'>
                <input
                    type='text'
                    className='input'
                    placeholder='Поиск города'
                    value={input}
                    onChange={(event) => {
                        event.preventDefault()
                        setInput(event.target.value)
                    }}
                />
                <input type='submit' hidden/>
            </form>
        </div>
    );
};

export default Search;