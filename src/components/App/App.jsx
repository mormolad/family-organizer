import './App.css';
import React from 'react';
import Cards from '../Cards/Cards.jsx';
import Header from '../Header/Header';
function App() {
  return (
    <div className="App">
      <Header />
      <Cards />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
