import React, { useState } from 'react';
import './FormDropdown.scss';
import arrowIcon from '../../../../assets/images/down-arrow.svg';

const monthNames = [
  { value: '01', label: 'January' },
  { value: '02', label: 'February' },
  { value: '03', label: 'March' },
  { value: '04', label: 'April' },
  { value: '05', label: 'May' },
  { value: '06', label: 'June' },
  { value: '07', label: 'July' },
  { value: '08', label: 'August' },
  { value: '09', label: 'September' },
  { value: '10', label: 'October' },
  { value: '11', label: 'November' },
  { value: '12', label: 'December' },
];

export const FormDropdown: React.FC = () => {
  const [selectedMonth, setSelectedMonth] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const handleLiChange = (value: string) => {
    setIsOpen((prev) => !prev);
    setSelectedMonth(value);
  };

  const OptionList = () => (
    <ul className='drop-down__list'>
      {monthNames.map(({ label }) => (
        <li
          onClick={() => handleLiChange(label)}
          className='Element'
          key={label}
        >
          {label}
        </li>
      ))}
    </ul>
  );

  return (
    <div className='custom-select'>
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className='select-month__button'
      >
        {selectedMonth ? selectedMonth : 'Month'}
        <img src={arrowIcon} alt='drop down icon' />
      </button>
      {isOpen ? <OptionList /> : null}
    </div>
  );
};
