import React from 'react';
import './App.css';
import {Route, Routes} from 'react-router-dom';
import { Prueba } from './fragment/PresentarLibros';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/libros' element={<Prueba/>}/>
      </Routes>
      </div>
  );
}

export default App;
