import React from 'react';
import { FormDropdown } from '../FormDropdown/FormDropdown';
import './BirthDateFormInput.scss';

export const BirthDateFormInput: React.FC = () => {
  return (
    <div>
      <div className='birth-date__label'>
        <label>
          <span>{`What's your date of birth`}</span>
        </label>
      </div>
      <div className='date-group'>
        <div className='month-form-group'>
          <div className='label-group'>
            <label className='month__label' htmlFor='month'>
              <span>{'Month'}</span>
            </label>
          </div>
          <FormDropdown />
        </div>
        <div className='day-form-group'>
          <div className='label-group'>
            <label className='day__label' htmlFor='day'>
              <span>{'Day'}</span>
            </label>
          </div>
          <input
            className='day__input'
            type='text'
            aria-invalid='false'
            id='day'
            name='day'
            placeholder='DD'
            required={true}
          />
        </div>
        <div className='year-form-group'>
          <div className='label-group'>
            <label className='year__label' htmlFor='year'>
              <span>{'Year'}</span>
            </label>
          </div>
          <input
            className='year__input'
            type='text'
            aria-invalid='false'
            id='year'
            name='year'
            placeholder='YYY'
            required={true}
          />
        </div>
      </div>
    </div>
  );
};
