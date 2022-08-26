import './App.css';
import MainLeft from "./components/MainLeft";
import MainRight from "./components/MainRight";
import getData from "./data";
import React, {useState} from "react";
import splitIntoDays from "./splitIntoDays";
import Search from "./components/Search/Search";

function App() {

    const [list, setList] = React.useState([])

    React.useEffect(() => {
        getData(setList,searchValue)
    }, [])

    console.log(list)

const [searchValue, setSearchValue] = useState('')
    console.log(searchValue)
  return (

    <div className='main'>
        <Search
            searchValue={searchValue}
            setSearchValue={setSearchValue}
        />
        <MainLeft data={list}/>

        <MainRight/>
        <div className='right--whiter'>

        </div>
    </div>
  );
}

export default App;
