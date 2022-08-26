import './App.css';
import MainLeft from "./components/MainLeft";
import MainRight from "./components/MainRight";
import getData from "./data";
import React, {useState} from "react";

function App() {

    const [list, setList] = React.useState([])
    const [currentForecast, setCurrentForecast] = React.useState({})
    const [searchValue, setSearchValue] = useState('Moscow')
    const handleForecast = (data) => {
        setCurrentForecast(data)
    }


    React.useEffect(() => {
        setTimeout(
        getData(setList,searchValue), 500
        )
    }, [searchValue])
  return (

    <div className='main'>

        <MainLeft data={list} changeForecast={handleForecast} searchValue={searchValue} setSearchValue={setSearchValue}/>
        <MainRight forecast={currentForecast}/>
        <div className='right--whiter'>
        </div>
    </div>
  );
}

export default App;
