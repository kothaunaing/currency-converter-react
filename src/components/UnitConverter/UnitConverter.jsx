/** @format */

import './UnitConverter.css';
import Line from '../Settings/Line';

import units from '../../assets/data/units';
import getIcons from '../../assets/utils/getIcons';
import { Link } from 'react-router-dom';

const UnitConverter = ({ data }) => {
  const { setMeasurement, getText } = data;
  let myIcon;

  const handleClick = (t) => {
    setMeasurement(t);
  };

  return (
    <div className='UnitConverter'>
      {units.map((u, i) => {
        const { name, types } = u;

        return (
          <div key={name} className='converter-items-container'>
            <div className='measurement-type high-div bold'>
              {getText(name.toLowerCase())}
            </div>
            {types.map((t) => {
              const { title, preview, img } = t;
              myIcon = getIcons(img);

              return (
                <div key={title} className='cursor-pointer'>
                  <Link to={`/convert/${img}`}>
                    <div
                      className='converter-item'
                      onClick={() => handleClick(t)}
                    >
                      <img className='icons' src={myIcon} />
                      <div>
                        <div>{getText(img)}</div>
                        <div className='small-font'>
                          {getText(preview.toLowerCase())}
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        );
      })}
      <div className='cursor-pointer'>
        <Link to='/convert/meter-bill'>
          <div className='converter-item'>
            <img className='icons' src={getIcons('meter-bill')} />
            <div>
              <div>{getText('meter-bill')}</div>
              <div className='small-font'>{getText('units-to-mmk')}</div>
            </div>
          </div>
        </Link>
      </div>
      <div className='cursor-pointer'>
        <Link to='/convert/age-calculator'>
          <div className='converter-item'>
            <img className='icons' src={getIcons('age-calculator')} />
            <div>
              <div>{getText('age-calculator')}</div>
              <div className='small-font'>{getText('date-to-age')}</div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default UnitConverter;
