import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import HomePage from './home';
import Create from './create';
import Admin from './admin';
import Update from './update';
import SignIn from './signin';
import SignUp from './signup';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<SignIn />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/home' element={<HomePage/>} />
          <Route path='/admin' element={<Admin />} />
          <Route path='/create' element={<Create />} />
          <Route path='/update/:Room' element={<Update />} />
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
