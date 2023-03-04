import React from 'react';
import './GenderRadioFormInput.scss';

export const GenderRadioFormInput: React.FC = () => {
  return (
    <div className='form-group--radio'>
      <div className='label-group--radio'>
        <label className='default__label'>
          <span>{`What's your gender?`}</span>
        </label>
      </div>
      <div className='radio__inputs'>
        <label className='container' htmlFor='male'>
          <span className='input-text'>Male</span>
          <input
            type='radio'
            name='gender'
            value='Male'
            id='male'
            //checked={topping === "Regular"}
            //onChange={onOptionChange}
          />
          <span className='check-mark'></span>
        </label>

        <label className='container' htmlFor='female'>
          <span className='input-text'>Female</span>
          <input
            type='radio'
            name='gender'
            value='Female'
            id='female'
            //checked={topping === "Medium"}
            //onChange={onOptionChange}
          />
          <span className='check-mark'></span>
        </label>

        <label className='container' htmlFor='non-binary'>
          <span className='input-text'>Non-binary</span>
          <input
            type='radio'
            name='gender'
            value='Non-binary'
            id='non-binary'
            //checked={topping === "Large"}
            //onChange={onOptionChange}
          />
          <span className='check-mark'></span>
        </label>

        <label className='container' htmlFor='other'>
          <span className='input-text'>Other</span>
          <input
            type='radio'
            name='gender'
            value='Other'
            id='other'
            //checked={topping === "Large"}
            //onChange={onOptionChange}
          />
          <span className='check-mark'></span>
        </label>

        <label className='container' htmlFor='not-say'>
          <span className='input-text'>Prefer not to say</span>
          <input
            type='radio'
            name='gender'
            value='Prefer not to say'
            id='not-say'
            //checked={topping === "Large"}
            //onChange={onOptionChange}
          />
          <span className='check-mark'></span>
        </label>
      </div>
    </div>
  );
};
