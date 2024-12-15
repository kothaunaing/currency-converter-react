/** @format */

import { useEffect, useState } from 'react';
import ConverterTitle from './ConverterTitle';

const AgeCalculator = ({ data }) => {
  const [dateInput, setDateInput] = useState('');
  const [date, setDate] = useState({});
  const [age, setAge] = useState({});
  const { measurement, getText, locationPath } = data;

  const handleDate = (e) => {
    setDateInput(e.target.value);
  };

  useEffect(() => {
    setDate(getDate(dateInput));
  }, [dateInput]);

  useEffect(() => {
    setAge(getAge(date));
  }, [date]);

  return (
    <div className='w-11/12'>
      <ConverterTitle data={{ measurement, getText, locationPath }} />
      <div className='my-3'>
        <input
          placeholder={getText('DD/MM/YYYY')}
          className='px-3 h-10 border rounded-md outline-none border-slate-600 bg-inherit'
          onChange={handleDate}
          value={dateInput ? dateInput : ''}
        />
        <div className='my-2 p-2'>{`${getText(
          'your-birthdate'
        )}: ${dateInput}`}</div>
        {date.year > 1000 ? (
          <div className='my-5 p-3 bg-slate-600 rounded-lg text-white font-bold'>
            <div>{`You are ${age?.year} years, ${age?.month} months and ${age?.day} days old.`}</div>
          </div>
        ) : (
          ''
        )}
      </div>
    </div>
  );
};

function getDate(dateInput) {
  const dateArray = dateInput.split('/');

  return {
    day: Number(dateArray[0]) || 0,
    month: Number(dateArray[1]) || 0,
    year: Number(dateArray[2]) || 0,
  };
}

function getAge(date) {
  const d1 = date.day;
  const m1 = date.month;
  const y1 = date.year;

  const currentDate = new Date();
  let d2 = currentDate.getDate();
  let m2 = 1 + currentDate.getMonth();
  let y2 = currentDate.getFullYear();
  const months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  if (d1 > d2) {
    d2 = d2 + months[m2 - 1];
    m2 = m2 - 1;
  }
  if (d2 > d1) {
    m2 = m2 + 12;
    y2 = y2 - 1;
  }

  return {
    year: y2 - y1,
    month: m2 - m1,
    day: d2 - d1,
  };
}

export default AgeCalculator;
