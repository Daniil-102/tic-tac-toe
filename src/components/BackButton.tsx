import React from 'react';
import back from '../images/back.svg';
import { Link } from 'react-router-dom';

export const BackButton = () => {
  return (
    <Link to={'/'} className='back-button'>
      <img src={back} alt='back button' />
    </Link>
  );
};
