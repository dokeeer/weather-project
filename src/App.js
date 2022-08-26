import './App.css';
import MainLeft from "./components/MainLeft";
import MainRight from "./components/MainRight";
import getData from "./data";
import React from "react";

function App() {

    const [list, setList] = React.useState([])

    React.useEffect(() => {
        getData(setList)

    }, [])
    if (list.length !== 0) {
        const date = new Date((list[0].dt_txt))
        console.log(date.getDay())
    }


  return (
    <div className='main'>
        <MainLeft/>
        <MainRight/>
        <div className='right--whiter'>

        </div>
    </div>
  );
}

export default App;
