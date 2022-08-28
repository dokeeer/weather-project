import './App.css';
import MainLeft from "./components/MainLeft";
import MainRight from "./components/MainRight";
import getData from "./data";
import React, {useState} from "react";

function App() {

    const [list, setList] = React.useState([])
    const [currentForecast, setCurrentForecast] = React.useState({})
    const [city, setCity] = React.useState('Moscow')
    const [searchValue, setSearchValue] = useState('Moscow')
    const [error, setError] = useState('')
    const handleForecast = (data) => {
        setCurrentForecast({})

        setTimeout(()=>setCurrentForecast(data),0)
    }


    React.useEffect(() => {
        getData(setList,searchValue, setCity, setCurrentForecast, setError)
    }, [searchValue])

    const conditionalRender = () => {
        return list.length !== 0
            ?
            <>
            <MainLeft
                city={city}
                data={list}
                changeForecast={handleForecast}
                searchValue={searchValue}
                setSearchValue={setSearchValue}
                current={currentForecast}
                error={error}
            />
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
