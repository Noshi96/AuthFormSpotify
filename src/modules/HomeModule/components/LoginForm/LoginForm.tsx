import { Button } from '@/global-components/Button/Button';
import React from 'react';
import { DefaultFormInput } from '../DefaultFormInput/DefaultFormInput';
import './LoginForm.scss';

export const LoginForm: React.FC = () => {
  return (
    <>
      <header className='welcome__header'>
        <span className='spotify-logotype'>{`Spotify`}</span>
        <span className='header-login--title'>{`Please sign in to Spotify to continue.`}</span>
        <div className='buttons-area'>
          <Button buttonType='google'>{`Sign up with Google`}</Button>
          <Button buttonType='apple'>{`Sign up with Apple`}</Button>
          <Button buttonType='facebook'>{`Sign up with Facebook`}</Button>
        </div>
      </header>

      <div className='register-form--separator'>
        <div className='separate-line' />
        <span>or</span>
        <div className='separate-line' />
      </div>
      <DefaultFormInput
        id='emailLogin'
        type='email'
        placeholder='Email address or username'
        labelText={`Email address or username`}
        required={true}
        ariaInvalid={false}
      />
      <DefaultFormInput
        id='passwordLogin'
        type='password'
        placeholder='Password'
        labelText='Password'
        required={true}
        ariaInvalid={false}
        extendedUnderlineMessage='Do not remember the password?'
      />
      <div className='sign-in-group'>
        <div className='remember-checkbox-group-login'>
          <input type='checkbox' id='remember' name='remember' />
          <label htmlFor='remember'>
            <span>{`Remember me`}</span>
          </label>
        </div>
        <Button buttonType='submitButton'>{`Sign up`}</Button>
      </div>
      <div className='login-separator__line' />
      <div className='no-account-group'>
        <span className='no-account__title'>{`You don't have an account yet?`}</span>
        <Button buttonType='default'>{'Sign up for spotify'}</Button>
      </div>
    </>
  );
};
