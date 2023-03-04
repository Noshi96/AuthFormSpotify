import React from 'react';

import './RegisterPage.scss';
import { LayoutGlobalComponent } from '@global-components';
import { LoginForm, RegisterForm } from '@home-module-components';

export const RegisterPage: React.FC = () => {
  return (
    <LayoutGlobalComponent>
      <RegisterForm />
      {/* <LoginForm /> */}
    </LayoutGlobalComponent>
  );
};
