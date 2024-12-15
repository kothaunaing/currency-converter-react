/** @format */

import { useState, useEffect } from 'react';
import getMeasurement from '../../assets/data/measurements';
import getConversion from '../../assets/data/commonConversion';

const CommonConversion = ({ data }) => {
  const { setFrom, setTo, locationPath } = data;
  const [units, setUnits] = useState(null);
  const conversion = getConversion(locationPath);

  useEffect(() => {
    setUnits(getMeasurement(locationPath));
  }, [locationPath]);

  const handleClick = (from, to) => {
    setFrom(getUnit(from, units));
    setTo(getUnit(to, units));
  };

  return (
    <div className='CommonConversion'>
      {conversion.length ? (
        <div className='conversion-title'>Common conversions</div>
      ) : (
        ''
      )}
      {conversion.map((l) => {
        return (
          <div
            className='conversion-names'
            onClick={() => handleClick(l.from, l.to)}
            key={l.name}
          >
            {l.name}
          </div>
        );
      })}
    </div>
  );
};

function getUnit(fromTo, units) {
  let result;

  units.forEach((u) => {
    if (fromTo === u.short) {
      result = u;
    }
  });

  return result;
}

export default CommonConversion;
