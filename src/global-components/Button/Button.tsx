import React from 'react';
import './Button.scss';
import googleIcon from '../../assets/images/icons8-google-22.svg';
import appleIcon from '../../assets/images/icons8-apple-logo.svg';

interface IDefaultButtonProps {
  children: string;
  buttonType: string;
}

export const Button: React.FC<IDefaultButtonProps> = ({
  children,
  buttonType,
}) => {
  if (buttonType === 'facebook') {
    return (
      <button className='default__button facebook__button'>
        <span className='fa fa-facebook' />
        <span>{children}</span>
      </button>
    );
  }
  if (buttonType === 'google') {
    return (
      <button className='default__button google__button'>
        <img src={googleIcon} alt='Google icon' />
        <span>{children}</span>
      </button>
    );
  }
  if (buttonType === 'apple') {
    return (
      <button className='default__button apple__button'>
        <img src={appleIcon} alt='Apple icon' />
        <span>{children}</span>
      </button>
    );
  }
  if (buttonType === 'submitButton') {
    return (
      <button className='default__button submit__button'>{children}</button>
    );
  }
  return <button className='default__button'>{children}</button>;
};
