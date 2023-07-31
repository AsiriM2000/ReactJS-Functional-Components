import React from 'react';
import {Routes, Route} from 'react-router-dom';
import HelloWorld from '../01.Hello World/HelloWorld';
import EffectHook from '../02.Hooks/Effect Hook/EffectHook';
import Hooks from '../02.Hooks/Hooks';
import StateHook from '../02.Hooks/State Hook/StateHook';


function App() {
  return (
    <div className="App">
        <Routes>
          <Route exact path='/' element={<HelloWorld/>}></Route>
          <Route exact path='/hooks' element={<Hooks/>}></Route>
          <Route exact path='/statehook' element={<StateHook/>}></Route>
          <Route exact path='/effecthook' element={<EffectHook/>}></Route>
        </Routes>
    </div>
  );
}

export default App;
