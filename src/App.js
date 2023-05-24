import logo from './logo.svg';
import './App.css';

import First from './components/First';
import Navbar from './components/Navbar';
import StateBasics from './components/StateBasics';
import Question1 from './components/Question1';
import Q1list from './components/Q1list';
import StateBasics1 from './components/StateBasics1';
import Table from './components/Table1';
import Table1 from './components/Table1';
import { Route, Routes } from 'react-router-dom';
import ApiGet from './components/ApiGet';

function App() {
  return (
    <div className="App">
      {/* <First/> */}
      {/* <Navbar></Navbar> */}
      {/* <StateBasics></StateBasics> */}
      {/* <Question1></Question1> */}
      {/* <Q1list></Q1list> */}
      {/* <StateBasics1></StateBasics1> */}
      {/* <Table1></Table1> */}
        <Navbar/>
      <Routes>
        <Route path='/'element={<StateBasics/>}/>
        <Route path='/first' element={<First/>}/>
        <Route path='/table' element={<Table1/>}/>
        <Route path='/buttons' element={<Question1/>}/>
        <Route path='axios' element={<ApiGet/>}/>
      </Routes>
      
    </div>

    
  );
}

export default App;
