/** @format */
// Imports from React
import { useEffect, useState } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

// Importing components
import Navbar from './components/Navbar/Navbar';
import UnitConverter from './components/UnitConverter/UnitConverter';
import Convert from './components/Convert/Convert';
import Settings from './components/Settings/Settings';
import About from './components/About/About';
import Error from './components/Error/Error';

// Importing required data and functions
import Rates from './components/Rates/Rates';
import { en, enShort } from './assets/lang/en';
import { my, myShort } from './assets/lang/my';
import { getFrom } from './assets/utils/localStorage';
import getMmNumber from './assets/utils/getMmNumber';
import defaultSetting from './assets/data/default-setting';
import MeterBill from './components/Convert/MeterBill';
import AgeCalculator from './components/Convert/AgeCalculator';

const pagePaths = [
  'length',
  'area',
  'currency',
  'time',
  'weight',
  'temperature',
  'data-storage',
];

function App() {
  const [measurement, setMeasurement] = useState({ img: 'length' });
  // const [currentPage, setCurrentPage] = useState('Convert');
  // const [pages, setPages] = useState(pagesData);
  const [settings, setSettings] = useState(
    getFrom('currency-settings') || defaultSetting
  );
  const [width, setWidth] = useState(0);

  window.addEventListener('mouse', () => {
    setWidth(document.documentElement.clientWidth + 17);
  });

  const getText = (key) => {
    switch (settings.Language) {
      case 'English':
        return en[key] || key;
      case 'Burmese':
        return my[key] || key;
      default:
        return key;
    }
  };

  const getCurrencyShort = (key) => {
    switch (settings.Language) {
      case 'English':
        return enShort[key] || key;
      case 'Burmese':
        return myShort[key] || key;
      default:
        return key;
    }
  };

  const getNumber = (number) => {
    switch (settings.Language) {
      case 'English':
        return number;
      case 'Burmese':
        return getMmNumber(number);
      default:
        return key;
    }
  };

  const navbarData = { getText };
  const convertData = {
    getText,
    getCurrencyShort,
    getNumber,
    measurement,
    width,
    settings,
  };
  const meterBillData = { getText, getNumber, measurement };
  const ratesData = { getCurrencyShort, getText, getNumber };
  const settingsData = { settings, setSettings };
  const aboutData = { getText, getNumber };
  const errorData = {};
  const unitConverterData = { setMeasurement, getText };

  return (
    <div className='App'>
      <Router>
        <Navbar data={navbarData} />
        <Routes>
          <Route
            exact
            path={'/'}
            element={<UnitConverter data={unitConverterData} />}
          />
          {pagePaths.map((path) => {
            return (
              <Route
                key={path}
                exact
                path={`/convert/${path}`}
                element={<Convert data={convertData} />}
              />
            );
          })}
          <Route
            exact
            path='/convert/meter-bill'
            element={<MeterBill data={meterBillData} />}
          />
          <Route
            exact
            path='/convert/age-calculator'
            element={<AgeCalculator data={meterBillData} />}
          />
          <Route exact path='/rates' element={<Rates data={ratesData} />} />
          <Route
            exact
            path='/settings'
            element={<Settings data={settingsData} />}
          />
          <Route exact path='/about' element={<About data={aboutData} />} />
          <Route path='*' element={<Error data={errorData} />} />
        </Routes>
      </Router>
    </div>
  );
}

//console.log(new Date().getTime());

export default App;
