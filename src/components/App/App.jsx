import './App.css';
import React from 'react';
import Main from "../Main/Main.jsx"
import Header from '../Header/Header';
function App() {
const addCard = ()=>{
  console.log('add card')
}
const clearCards = ()=>{
  console.log('clear card')
}


  return (
    <div className="App">
      <Header />
      <Main addCard={addCard} clearCards={clearCards}/>
      
      {/* <Footer /> */}
    </div>
  );
}

export default App;

