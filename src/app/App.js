import React from 'react';
import {Routes, Route} from 'react-router-dom';
import HelloWorld from '../01.Hello World/HelloWorld';
import Hooks from '../02.Hooks/Hooks';


function App() {
  return (
    <div className="App">
        <Routes>
          <Route exact path='/' element={<HelloWorld/>}></Route>
          <Route exact path='/hooks' element={<Hooks/>}></Route>
        </Routes>
    </div>
  );
}

export default App;
