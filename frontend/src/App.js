import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import components
import './App.css';


function App() {
  return (
    <Router>
      <div className='App'>
        <header className='App-header'>
          <p>Welcome to Share It</p>
        </header>
        {/* <Routes>
          <Route path='/about' element={<About />} />
        </Routes> */}
      </div>
    </Router>
  );
}

export default App;
