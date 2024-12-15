/** @format */

import { useEffect, useState } from 'react';
import ConverterTitle from './ConverterTitle';
import './MeterBill.css';
import calculateBill from '../../assets/utils/calculate-bills';
import { useLocation } from 'react-router-dom';
import getPathName from '../../assets/utils/getPath';

const MeterBill = ({ data }) => {
  const { getText, setCurrentPage, getNumber } = data;

  const location = useLocation();
  const locationPath = getPathName(location.pathname);

  const [unit, setUnit] = useState(0);
  const [cost, setCost] = useState(0);

  const changeUnit = (e) => {
    setUnit(Number(e.target.value));
  };

  const calBill = () => {
    setCost(calculateBill(unit));
  };

  useEffect(() => {
    calBill();
  }, [unit]);

  return (
    <div className='MeterBill'>
      <ConverterTitle data={{ getText, setCurrentPage, locationPath }} />
      <div className='working-area'>
        <div className='input-container'>
          <div className='unit-text'>{getText('units')}</div>
          <input
            className='unit-input'
            onChange={changeUnit}
            maxLength='8'
            value={unit ? unit : ''}
            placeholder={getText('enter-units')}
          />
        </div>
        <div className='meter-bill-display'>
          <div className='meter-results-table'>
            <div>{getText('used-units')}</div>
            <div>
              {unit ? getNumber(unit) : getNumber('0')} {getText('units')}
            </div>
            <div>{getText('service-fee')}</div>
            <div>
              {unit ? getNumber('500') : getNumber('0')} {getText('kyats')}
            </div>
            <div>{getText('total-cost')}</div>
            <div>
              {unit
                ? getNumber(cost + 500)
                : cost
                ? getNumber(cost)
                : getNumber('0')}{' '}
              {getText('kyats')}
            </div>
          </div>
        </div>
        <div>
          <a href='https://kothaunaing.github.io/meterbill'>See full project</a>
        </div>
      </div>
    </div>
  );
};

export default MeterBill;
