import React from 'react';
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
          <select
            className='month__input'
            aria-invalid='false'
            id='month'
            name='month'
            placeholder='Month'
            required={true}
          >
            <option value='' disabled selected style={{ display: 'none' }}>
              Month
            </option>
            <option value='01'>January</option>
            <option value='02'>February</option>
            <option value='03'>March</option>
            <option value='04'>April</option>
            <option value='05'>May</option>
            <option value='06'>June</option>
            <option value='07'>July</option>
            <option value='08'>August</option>
            <option value='09'>September</option>
            <option value='10'>October</option>
            <option value='11'>November</option>
            <option value='12'>December</option>
          </select>
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
