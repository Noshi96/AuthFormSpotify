import React from 'react';
import './LayoutGlobalComponent.scss';

interface ILayoutGlobalComponentProps {
  children: JSX.Element | JSX.Element[];
}

export const LayoutGlobalComponent: React.FC<ILayoutGlobalComponentProps> = ({
  children,
}) => (
  <div className='global-layout'>
    <div className='global__content--center'>{children}</div>
  </div>
);
