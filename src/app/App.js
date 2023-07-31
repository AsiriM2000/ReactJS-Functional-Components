import React from 'react';
import {Routes, Route} from 'react-router-dom';
import HelloWorld from '../01.Hello World/HelloWorld';
import EffectHook from '../02.Hooks/Effect Hook/EffectHook';
import Hooks from '../02.Hooks/Hooks';
import StateHook from '../02.Hooks/State Hook/StateHook';
import { RegisterStudent } from '../03.Normal CRUD/form/RegisterStudent';
import Nav from '../03.Normal CRUD/nav/Nav';
import { View } from '../03.Normal CRUD/view/View';


function App() {
  return (
    <div className="App">
        <Nav/>
        <Routes>
          <Route exact path='/' element={<HelloWorld/>}></Route>
          <Route path='/hooks' element={<Hooks/>}></Route>
          <Route path='/statehook' element={<StateHook/>}></Route>
          <Route path='/effecthook' element={<EffectHook/>}></Route>

          <Route path='Register Student' element={<RegisterStudent/>}></Route>
          <Route path='View' element={<View/>}></Route>
        </Routes>
    </div>
  );
}

export default App;
