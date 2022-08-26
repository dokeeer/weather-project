import './App.css';
import MainLeft from "./components/MainLeft";
import MainRight from "./components/MainRight";
import getData from "./data";
import React from "react";
import splitIntoDays from "./splitIntoDays";

function App() {

    const [list, setList] = React.useState([])

    React.useEffect(() => {
        getData(setList)
    }, [])

    console.log(list)



  return (

    <div className='main'>
        <MainLeft data={list}/>
        <MainRight/>
        <div className='right--whiter'>

        </div>
    </div>
  );
}

export default App;
