import React from 'react';
import { LayoutGlobalComponent } from '@global-components';
import { RegisterForm } from '@home-module-components';
import { useOutlet } from 'react-router-dom';

const Root: React.FC = () => {
  const outlet = useOutlet();
  return (
    <LayoutGlobalComponent>{outlet || <RegisterForm />}</LayoutGlobalComponent>
  );
};

export default Root;
