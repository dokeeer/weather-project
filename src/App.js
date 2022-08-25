import './App.css';
import MainLeft from "./components/MainLeft";
import MainRight from "./components/MainRight";
import getData from "./data";

function App() {
    getData()
  return (
    <div className='main'>
        <MainLeft/>
        <MainRight/>
    </div>
  );
}

export default App;
