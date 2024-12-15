/** @format */
import { useEffect, useState } from 'react';
import getFactors from '../../assets/data/factors';
import getTemp from '../../assets/data/getTemp';
import Line from '../Settings/Line';

const Display = ({ data }) => {
  const {
    amount,
    result,
    from,
    to,
    getNumber,
    getCurrencyShort,
    locationPath,
    settings,
  } = data;
  const [currentRates, setCurrentRates] = useState({ from: 0, to: 0 });
  const unit = locationPath;

  const pluralNoun = (number) => {
    let plural;

    if (settings.Language === 'English') {
      if (number > 1) {
        plural = 's';
      }
    } else {
      plural = '';
    }

    return plural;
  };

  useEffect(() => {
    try {
      if (unit === 'temperature') {
        setCurrentRates({
          from: getTemp(1, from.short).formulas[to.short],
          to: getTemp(1, to.short).formulas[from.short],
        });
      } else {
        setCurrentRates({
          from: getFactors(unit, from.short)[to.short] || 1,
          to: getFactors(unit, to.short)[from.short] || 1,
        });
      }
    } catch (error) {
      console.log(error.message);
    }
  }, [from, to]);

  return (
    <div className='Display'>
      {amount && result ? (
        <div className='results f-1-2'>
          {getNumber(amount)} {getCurrencyShort(from.short.toLowerCase())}
          {pluralNoun(amount)} = {getNumber(result)}{' '}
          {getCurrencyShort(to.short.toLowerCase())}
          {pluralNoun(result)}
        </div>
      ) : (
        ''
      )}
      <div className='preview'>
        <div>
          {getNumber(1)} {getCurrencyShort(from.short.toLowerCase())} ={' '}
          {getNumber(currentRates.from.toFixed(5))}{' '}
          {getCurrencyShort(to.short.toLowerCase())}
          {pluralNoun(currentRates.from)}
        </div>
        {from.short !== to.short && (
          <div>
            {getNumber(1)} {getCurrencyShort(to.short.toLowerCase())} ={' '}
            {getNumber(currentRates.to.toFixed(5))}{' '}
            {getCurrencyShort(from.short.toLowerCase())}
            {pluralNoun(currentRates.to)}
          </div>
        )}
      </div>
    </div>
  );
};

export default Display;
