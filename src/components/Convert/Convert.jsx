/** @format */

import { useEffect, useState } from 'react';
import CustomSelector from './CustomSelector';
import getFactors from '../../assets/data/factors';
import Display from './Display';
import SelectCurrency from '../SelectCurrency/SelectCurrency';
import ConverterTitle from './ConverterTitle';
import getMeasurement from '../../assets/data/measurements';
import getIcons from '../../assets/utils/getIcons';
import getTemp from '../../assets/data/getTemp';
import CommonConversion from './CommonConversion';
import Line from '../Settings/Line';
import { useLocation } from 'react-router-dom';
import getPathName from '../../assets/utils/getPath';

const Convert = ({ data }) => {
  const { getText, getNumber, getCurrencyShort, measurement, width, settings } =
    data;

  let array;
  const location = useLocation();
  const locationPath = getPathName(location.pathname);

  try {
    array = getMeasurement(locationPath);
  } catch (error) {
    console.log(error.message);
  }

  const [from, setFrom] = useState(array ? array[0] : {});
  const [to, setTo] = useState(array ? array[1] : {});
  const [amount, setAmount] = useState(null);
  const [result, setResult] = useState(0);
  const [isSelecting, setIsSelecting] = useState(false);
  const [selectFrom, setSelectFrom] = useState(null);

  useEffect(() => {
    setFrom(array[0]);
    setTo(array[1]);
  }, [array]);

  const handleSwap = () => {
    setFrom(to);
    setTo(from);
  };

  const handleAmount = (e) => {
    setAmount(e.target.value);
  };

  const clearInput = () => {
    setAmount('');
  };

  useEffect(() => {
    calResult();
  }, [from, to]);

  useEffect(() => {
    calResult();
  }, [amount]);

  const calResult = () => {
    try {
      if (getPathName(location.pathname) === 'temperature') {
        setResult(calculateTemp(Number(amount), from.short, to.short));
      } else {
        setResult(
          calculateCurrency(amount, locationPath, from.short, to.short)
        );
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  if (isSelecting) {
    return (
      <SelectCurrency
        data={{
          isSelecting,
          setIsSelecting,
          array,
          selectFrom,
          setFrom,
          setTo,
          from,
          to,
          getText,
          getCurrencyShort,
        }}
      />
    );
  } else {
    return (
      <div className='Convert'>
        <ConverterTitle data={{ measurement, getText }} />
        <div>
          <div className='tb mb-3'>{getText('amount')}</div>
          <div className='small-container amount-container'>
            <div>{from.symbol ? from.symbol : from.short}</div>
            <input
              placeholder={getText('enter-amount')}
              className='amount'
              value={amount ? amount : ''}
              onChange={handleAmount}
              maxLength='8'
            />
            <img
              onClick={clearInput}
              className='icons cursor-pointer'
              src={getIcons('clear')}
            />
          </div>
        </div>

        <div className='from-swap-to'>
          <div className='from-to-container'>
            <div className='from-to tb'>{getText('from')}</div>
            <CustomSelector
              data={{
                item: from,
                setIsSelecting,
                selected: 'from',
                setSelectFrom,
                getText,
              }}
            />
          </div>
          <div className='swap-container'>
            <button onClick={handleSwap}>
              <img
                className='icons'
                src={width >= 900 ? getIcons('transfer') : getIcons('swap')}
              />
            </button>
          </div>
          <div className='from-to-container'>
            <div className='from-to tb'>{getText('to')}</div>
            <CustomSelector
              data={{
                item: to,
                setIsSelecting,
                selected: 'to',
                setSelectFrom,
                getText,
              }}
            />
          </div>
        </div>

        <Display
          data={{
            amount,
            result,
            from,
            to,
            getNumber,
            getCurrencyShort,
            locationPath,
            settings,
          }}
        />
        <Line />
        <CommonConversion data={{ setFrom, setTo, locationPath }} />
      </div>
    );
  }
};

function calculateCurrency(amount, title, from, to) {
  let factor = getFactors(title, from);
  let result;

  if (from === to) {
    result = amount;
  } else {
    result = factor[to] * Number(amount);
  }

  return result;
}

function calculateTemp(amount, from, to) {
  let item = getTemp(amount, from);
  let result;

  if (from === to) {
    result = amount;
  } else {
    result = item.formulas[to];
  }

  return result;
}

export default Convert;
