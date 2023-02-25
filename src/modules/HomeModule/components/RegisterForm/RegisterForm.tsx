import { Button } from '@/global-components/Button/Button';
import React from 'react';
import { BirthDateFormInput } from '../BirthDateFormInput/BirthDateFormInput';
import { DefaultFormInput } from '../DefaultFormInput/DefaultFormInput';
import { GenderRadioFormInput } from '../GenderRadioFormInput/GenderRadioFormInput';
import './RegisterForm.scss';

export const RegisterForm: React.FC = () => {
  return (
    <>
      <header className='welcome__header'>
        <span className='spotify-logotype'>{`Spotify`}</span>
        <span className='header--title'>{`Sign up for free to start listening`}</span>
        <div className='buttons-area'>
          <Button buttonType='google'>{`Sign up with Google`}</Button>
          <Button buttonType='facebook'>{`Sign up with Facebook`}</Button>
        </div>
      </header>

      <div className='register-form--separator'>
        <div className='separate-line' />
        <span>or</span>
        <div className='separate-line' />
      </div>
      <span className='sign-email__span'>{`Sign up with your email address`}</span>
      <DefaultFormInput
        id='email'
        type='email'
        placeholder='Enter your email.'
        labelText={`What's your email?`}
        required={true}
        ariaInvalid={false}
      />
      <DefaultFormInput
        id='confirm'
        type='email'
        placeholder='Confirm your email'
        labelText='Enter your email again.'
        required={true}
        ariaInvalid={false}
      />
      <DefaultFormInput
        id='password'
        type='password'
        placeholder='Create a password'
        labelText='Create a password'
        required={true}
        ariaInvalid={false}
      />
      <DefaultFormInput
        id='displayname'
        type='text'
        placeholder='What should we call you?'
        labelText='Enter a profile name.'
        required={true}
        ariaInvalid={false}
        extendedMessage='This appears on your profile'
      />
      <BirthDateFormInput />
      <GenderRadioFormInput />
      <div className='share-checkbox-group'>
        <input type='checkbox' id='share' name='share' />
        <label htmlFor='share'>
          <span>
            {`Share my registration date with Spotify's content providers for
            marketing purposes.`}
          </span>
        </label>
      </div>
      <div className='additional-form-information first-information center-self'>
        {`By clicking on sing-up. you agree to Sporify's `}
        <span>{`Terms and Conditions of Use.`}</span>
      </div>
      <div className='additional-form-information second-information center-self'>
        {`To learn more about how. Spotify collects, uses, shares and protects your personal data, please see `}
        <span>{`Spotify's Privacy Policy`}</span>.
      </div>
      <Button buttonType='submitButton'>{`Sign up`}</Button>
      <div className='login-question'>
        {'Have an account? '}
        <span>{'Log in'}</span>
        {'.'}
      </div>
    </>
  );
};
