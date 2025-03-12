import React from 'react';
import pict from './../images/picture.svg';
import home from '../images/home.svg';
import { Link } from 'react-router-dom';

export const Modal = ({ text }) => {
  return (
    <div className='modal'>
      <div className='modal_container'>
        <h2 className='modal_title'>{text}</h2>
        <button
          className='modal_replay'
          onClick={() => window.location.reload()}
        >
          Play Again
        </button>
        <Link className='modal_home' to={'/'}>
          <img src={home} alt='back to home' />
          Back to Home
        </Link>
        <div className='modal_img_container'>
          <img className='modal_img' src={pict} alt='Tic Tac Toe' />
        </div>
      </div>
    </div>
  );
};
