import React from 'react';
import './Search.css'
import search from '../../images/search-black.svg'

const Search = ({searchValue,setSearchValue}) => {
    const [input, setInput] = React.useState('Moscow')
    const handleSubmit = (e) => {
        e.preventDefault()
        setSearchValue(input.trim())

    }
    return (

            <form onSubmit={handleSubmit} className='thisForm'>
                <div className='search--holder'>
                <input
                    type='text'
                    className='input'
                    placeholder='Поиск города'
                    value={input}
                    onChange={(event) => {
                        event.preventDefault()
                        setInput(event.target.value)
                    }}
                >
                </input><img src={search} className='search--img' onClick={handleSubmit}/>
                </div>
                <input type='submit' hidden/>
            </form>

    );
};

export default Search;