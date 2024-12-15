/** @format */

import { Link } from 'react-router-dom';
import getIcons from '../../assets/utils/getIcons';
import Line from '../Settings/Line';
import { useLocation } from 'react-router-dom';
import getPathName from '../../assets/utils/getPath';

const ConverterTitle = ({ data }) => {
  const { measurement, getText } = data;

  const location = useLocation();
  const locationPath = getPathName(location.pathname);

  return (
    <div className='ConverterTitle'>
      <Link to='/'>
        <div className='back-con'>
          <img className='icons cu-p' src={getIcons('back')} />
        </div>
      </Link>
      <div className='main-title'>
        <img className='icons' src={getIcons(locationPath)} />
        <div>{getText(locationPath)}</div>
      </div>
    </div>
  );
};

export default ConverterTitle;
