import React from 'react';
import './App.css';
import CV from 'react-cv'
import { CVData } from './data';

function App() {
  return (
    <div className="App">
      <CV {...CVData} />
    </div>
  );
}

export default App;
