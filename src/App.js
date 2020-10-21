import React from 'react';
import MainListContainer from './components/main-list/main-list-container';
import cinema_bg from './images/cinema_bg.jpg'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div style={{ height: '100vh', backgroundImage: `url(${cinema_bg})` }} className="App">
      <MainListContainer/>
    </div>
  );
}

export default App;
