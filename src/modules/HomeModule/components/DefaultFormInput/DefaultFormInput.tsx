import React from 'react';
import './DefaultFormInput.scss';

interface IDefaultFormInputProps {
  id: string;
  type: string;
  labelText: string;
  placeholder: string;
  ariaInvalid: boolean;
  required: boolean;
  extendedMessage?: string;
  extendedUnderlineMessage?: string;
}

export const DefaultFormInput: React.FC<IDefaultFormInputProps> = (props) => {
  const {
    id,
    labelText,
    type,
    ariaInvalid,
    placeholder,
    required,
    extendedMessage,
    extendedUnderlineMessage,
  } = props;

  return (
    <div className='form-group'>
      <div className='label-group'>
        <label className='default__label' htmlFor={id}>
          <span>{labelText}</span>
        </label>
      </div>
      <input
        className='default__input'
        type={type}
        aria-invalid={ariaInvalid}
        id={id}
        name={id}
        placeholder={placeholder}
        required={required}
      />
      {extendedMessage ? (
        <div className='extended-message'>{extendedMessage}</div>
      ) : null}
      {extendedUnderlineMessage ? (
        <a className='extended-message--underline'>
          {extendedUnderlineMessage}
        </a>
      ) : null}
    </div>
  );
};
