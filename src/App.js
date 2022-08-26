import './App.css';
import MainLeft from "./components/MainLeft";
import MainRight from "./components/MainRight";
import getData from "./data";
import React from "react";

function App() {

    const [list, setList] = React.useState([])
    const [currentForecast, setCurrentForecast] = React.useState()

    React.useEffect(() => {
        getData(setList)
    }, [])

    const handleForecast = (data) => {
        setCurrentForecast(data)
    }

    React.useEffect(() => {
        console.log(currentForecast)
    }, [currentForecast])

  return (

    <div className='main'>
        <MainLeft data={list} changeForecast={handleForecast}/>
        <MainRight forecast={currentForecast}/>
        <div className='right--whiter'>

        </div>
    </div>
  );
}

export default App;
