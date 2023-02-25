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
        <input
          type='radio'
          name='gender'
          value='Male'
          id='male'
          //checked={topping === "Regular"}
          //onChange={onOptionChange}
        />
        <label htmlFor='male'>Male</label>

        <input
          type='radio'
          name='gender'
          value='Female'
          id='female'
          //checked={topping === "Medium"}
          //onChange={onOptionChange}
        />
        <label htmlFor='female'>Female</label>

        <input
          type='radio'
          name='gender'
          value='Non-binary'
          id='non-binary'
          //checked={topping === "Large"}
          //onChange={onOptionChange}
        />
        <label htmlFor='non-binary'>Non-binary</label>

        <input
          type='radio'
          name='gender'
          value='Other'
          id='other'
          //checked={topping === "Large"}
          //onChange={onOptionChange}
        />
        <label htmlFor='other'>Other</label>
        <input
          type='radio'
          name='gender'
          value='Prefer not to say'
          id='not-say'
          //checked={topping === "Large"}
          //onChange={onOptionChange}
        />
        <label htmlFor='not-say'>Prefer not to say</label>
      </div>
    </div>
  );
};
