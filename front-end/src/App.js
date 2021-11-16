import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import AllEstimates from './Pages/allEstimates';
import NewEstimate from './Pages/newEstimate';

function App() {
  return (
    
    <Router>
      <Routes>
        <Route path='/' element={ <AllEstimates /> } />
        <Route path="/newEstimate" element={ <NewEstimate /> } />
      </Routes>
    </Router>

  );
}

export default App;
