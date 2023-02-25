import { LayoutGlobalComponent } from '@/global-components/LayoutGlobalComponent/LayoutGlobalComponent';
import React from 'react';
import { RegisterForm, LoginForm } from '../../components';
import './RegisterPage.scss';

interface IRegisterPageProps {
  msg: string;
}

export const RegisterPage: React.FC<IRegisterPageProps> = () => {
  return (
    <LayoutGlobalComponent>
      {/* <RegisterForm /> */}
      <LoginForm />
    </LayoutGlobalComponent>
  );
};
