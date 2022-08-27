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
        getData(setList,searchValue)
    }, [searchValue])

    const conditionalRender = () => {
        return list.length !== 0
            ?
            <>
            <MainLeft data={list} changeForecast={handleForecast} searchValue={searchValue} setSearchValue={setSearchValue}/>
            <MainRight forecast={currentForecast}/>
            </>
            : <></>

    }
  return (

    <div className='main'>

        {conditionalRender()}
        <div className='right--whiter'>
        </div>
    </div>
  );
}

export default App;
