import React from 'react';
import './App.css';
import MainComponent from './components/index'
import { GlobalContext } from './components/GlobalState/contextApi'

function App() {

  return (
    <GlobalContext>
      <MainComponent />
    </GlobalContext>
  );
}

export default App;