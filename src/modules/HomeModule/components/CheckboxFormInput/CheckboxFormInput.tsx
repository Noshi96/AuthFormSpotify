import React from 'react';
import './CheckboxFormInput.scss';

interface ICheckboxFormInputProps {
  id: string;
  text: string;
}
export const CheckboxFormInput: React.FC<ICheckboxFormInputProps> = ({
  id,
  text,
}) => {
  return (
    <div className='checkbox-group'>
      <label className='container' htmlFor={id}>
        <span>{text}</span>
        <input
          type='checkbox'
          id={id}
          //checked={topping === "Large"}
          //onChange={onOptionChange}
        />
        <span className='checkmark'></span>
      </label>
    </div>
  );
};
