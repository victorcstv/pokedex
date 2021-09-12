import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes'
import "@fontsource/happy-monkey";
import './styles/global.css';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </>
  );
}

export default App;
