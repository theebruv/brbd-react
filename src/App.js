import React from 'react';
import './App.css';
import Header from './components/ui/Header';
import Footer from './components/ui/Footer';
import Characters from './components/characters/Characters';

const App = () => {
  return (
    <div className="App">
      <Header />
      <div className="container mx-auto px-4">
        <Characters />
        <Footer />
      </div>
    </div>
  );
}

export default App;
