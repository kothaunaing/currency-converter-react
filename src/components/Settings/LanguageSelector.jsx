/** @format */

import { useState, useEffect } from 'react';
import { saveTo } from '../../assets/utils/localStorage';
import getIcons from '../../assets/utils/getIcons';

const styles = {
  container: {
    width: '100%',
  },
  title: {
    cursor: 'pointer',
    padding: '10px 10px 10px 10px',
    fontWeight: '600',
    color: 'gray',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  item: {
    cursor: 'pointer',
    color: 'blue',
    padding: '5px',
  },
  icon: {
    height: '20px',
  },
};

const LanguageSelector = ({ data }) => {
  const { array, settings, setSettings, title } = data;

  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    saveTo('currency-settings', settings);
  }, [settings]);

  const changeValue = (name) => {
    if (title === 'Language') {
      setSettings({ ...settings, Language: name });
    } else {
      setSettings({ ...settings, Theme: name });
    }
  };

  return (
    <div className='LanguageSelector' style={styles.container}>
      <div style={styles.title} onClick={handleClick}>
        <div>
          {title} : {settings[title]}
        </div>
        <div className='circle'>
          <img
            style={styles.icon}
            src={!isOpen ? getIcons('down') : getIcons('up')}
          />
        </div>
      </div>

      {isOpen && (
        <div className='setting-item-display'>
          {array.map((item) => {
            return (
              <div
                className={`${
                  item.name === settings[title] ? 'setting-item-active' : ''
                }`}
                key={item.name}
                style={styles.item}
                onClick={() => changeValue(item.name)}
              >
                {item.name}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;
