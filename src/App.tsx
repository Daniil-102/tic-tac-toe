import React from 'react';
import './App.scss';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className='board_container'>
      <div className='main'>
        <div className='main_container'>
          <h1 className='main_title'>Tic-Tac-Toe</h1>
          <p className='main_wellcome'>
            Welcome to the ultimate Tic-Tac-Toe game!
          </p>
          <p className='main_choose'>Please choose a game mode:</p>
          <Link className='main_link' to={'/tic-tac-toe'}>
            Tic Tac Toe
          </Link>
          <Link className='main_link' to={'/mega-tic-tac-toe'}>
            (Tic Tac Toe)²
          </Link>
          <Link className='main_link' to={'/tic-tac-toe-four'}>
            Tic Tac toe (4×4)
          </Link>
        </div>
      </div>
    </div>
  );
}

export default App;
