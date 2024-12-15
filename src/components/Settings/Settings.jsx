/** @format */

import LanguageSelector from './LanguageSelector';
import Line from './Line';

const languages = [
  {
    name: 'English',
  },
  {
    name: 'Burmese',
  },
];

const themes = [
  {
    name: 'Light',
  },
];

const Settings = ({ data }) => {
  const { settings, setSettings } = data;

  return (
    <div className='Settings'>
      <div className='setting-item'>
        <Line />
        <div className='setting-language'>
          <LanguageSelector
            data={{
              array: languages,
              settings,
              setSettings,
              title: 'Language',
            }}
          />
        </div>
      </div>
      <div className='setting-item'>
        <Line />
        <div className='setting-language'>
          <LanguageSelector
            data={{
              array: themes,
              settings,
              setSettings,
              title: 'Theme',
            }}
          />
        </div>
        <Line />
      </div>
    </div>
  );
};

export default Settings;
