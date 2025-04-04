import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import reportWebVitals from './reportWebVitals.ts';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { MegaTicTacToe } from './components/MegaTicTacToe.tsx';
import { TicTacToe } from './components/TicTacToe.tsx';
import { TicTacToeFour } from './components/TicTacToeFour.tsx';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/mega-tic-tac-toe' element={<MegaTicTacToe />} />
        <Route path='/tic-tac-toe' element={<TicTacToe />} />
        <Route path='/tic-tac-toe-four' element={<TicTacToeFour />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
