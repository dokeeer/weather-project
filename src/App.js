import './App.css';
import MainLeft from "./components/MainLeft";
import MainRight from "./components/MainRight";
import getData from "./data";
import React from "react";

function App() {
    getData()
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
