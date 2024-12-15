/** @format */
import { useEffect } from 'react';
import getIcons from '../../assets/utils/getIcons';
import { Link, useLocation } from 'react-router-dom';
import allPaths from '../../assets/data/paths';
import getPathName from '../../assets/utils/getPath';

const Navbar = ({ data }) => {
  const { getText } = data;

  const location = useLocation();
  let isHomeActive = false;
  let isRatesActive = false;
  let isAboutActive = false;
  let isSettingsActive = false;

  allPaths[0].forEach((p) => {
    if (location.pathname === p) {
      isHomeActive = true;
    }
  });

  allPaths[1].forEach((p) => {
    if (location.pathname === p) {
      isRatesActive = true;
    }
  });
  allPaths[2].forEach((p) => {
    if (location.pathname === p) {
      isAboutActive = true;
    }
  });
  allPaths[3].forEach((p) => {
    if (location.pathname === p) {
      isSettingsActive = true;
    }
  });

  useEffect(() => {
    document.title = `Convert | ${
      getText(getPathName(location.pathname)) || 'Home'
    }`;
  }, [location]);

  return (
    <div className='Navbar'>
      <div className='navbar-items-container'>
        <Link className='navbar-links' to='/'>
          <div className={`Navbar-items ${isHomeActive ? 'active' : ''}`}>
            <img className='small-icons' src={getIcons('convert')} />
            <div>{getText('convert')}</div>
          </div>
        </Link>
        <Link className='navbar-links' to='/rates'>
          <div className={`Navbar-items ${isRatesActive ? 'active' : ''}`}>
            <img className='small-icons' src={getIcons('chart')} />
            <div>{getText('rates')}</div>
          </div>
        </Link>
        <Link className='navbar-links' to='/about'>
          <div className={`Navbar-items ${isAboutActive ? 'active' : ''}`}>
            <img className='small-icons' src={getIcons('about')} />
            <div>{getText('about')}</div>
          </div>
        </Link>
        <Link className='navbar-links' to='/settings'>
          <div className={`Navbar-items ${isSettingsActive ? 'active' : ''}`}>
            <img className='small-icons' src={getIcons('setting')} />
            <div>{getText('settings')}</div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
