import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import LandingPage from './components/LandingPage/LandingPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        {/* <Route path='/addtask' element={<InputPage addTask={addTask} />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
