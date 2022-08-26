import './App.css';
import MainLeft from "./components/MainLeft";
import MainRight from "./components/MainRight";
import getData from "./data";
import React, {useState} from "react";
import Search from "./components/Search/Search";

function App() {

    const [list, setList] = React.useState([])
    const [currentForecast, setCurrentForecast] = React.useState()

    React.useEffect(() => {
        getData(setList,searchValue)
    }, [])

    const handleForecast = (data) => {
        setCurrentForecast(data)
    }


const [searchValue, setSearchValue] = useState('')
    console.log(searchValue)
  return (

    <div className='main'>
        <MainLeft data={list} changeForecast={handleForecast}/>
        <MainRight forecast={currentForecast}/>
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
