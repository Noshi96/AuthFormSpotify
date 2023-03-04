import React from 'react';
import { Button } from '@global-components';
import { DefaultFormInput, CheckboxFormInput } from '@home-module-components';
import './LoginForm.scss';

export const LoginForm: React.FC = () => {
  return (
    <>
      <header className='welcome__header'>
        <span className='welcome__header-spotify-logotype'>{`Spotify`}</span>
        <span className='welcome__header-login--title'>{`Please sign in to Spotify to continue.`}</span>
        <div className='welcome__header-buttons-area'>
          <Button buttonType='google'>{`Sign up with Google`}</Button>
          <Button buttonType='apple'>{`Sign up with Apple`}</Button>
          <Button buttonType='facebook'>{`Sign up with Facebook`}</Button>
        </div>
      </header>

      <div className='form-separator'>
        <div className='form-separator-line' />
        <span>or</span>
        <div className='form-separator-line' />
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
        <CheckboxFormInput id='remember-checkbox' text={`Remember me`} />
        <Button buttonType='submitButton'>{`Sign up`}</Button>
      </div>
      <div className='login-separator__line' />
      <div className='no-account-group'>
        <span className='no-account-group__title'>{`You don't have an account yet?`}</span>
        <Button buttonType='default'>{'Sign up for spotify'}</Button>
      </div>
    </>
  );
};
