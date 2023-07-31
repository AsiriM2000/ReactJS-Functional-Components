import React from 'react';
import {Routes, Route} from 'react-router-dom';
import HelloWorld from '../01.Hello World/HelloWorld';


function App() {
  return (
    <div className="App">
        <Routes>
          <Route exact path='/' element={<HelloWorld/>}></Route>
        </Routes>
    </div>
  );
}

export default App;
