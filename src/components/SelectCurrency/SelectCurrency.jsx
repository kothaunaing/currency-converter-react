/** @format */

import { useEffect, useState } from 'react';
import getIcons from '../../assets/utils/getIcons';

const SelectCurrency = ({ data }) => {
  const {
    setIsSelecting,
    selectFrom,
    setFrom,
    setTo,
    from,
    to,
    getText,
    array,
    getCurrencyShort,
  } = data;
  const [search, setSearch] = useState('');
  let userItem;
  const [filteredCurrencies, setFilteredCurrencies] = useState(array);

  const handleIsSelecting = () => {
    setIsSelecting(false);
  };

  useEffect(() => {
    setFilteredCurrencies(filterCurrencies(array, search));
  }, [search]);

  if (selectFrom === 'from') {
    userItem = from;
  } else {
    userItem = to;
  }

  const handleSelect = (item) => {
    if (selectFrom === 'from') {
      setFrom(item);
    } else if (selectFrom === 'to') {
      setTo(item);
    }
    setIsSelecting(false);
  };

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className='SelectCurrency'>
      <div className='display-fl'>
        <div className='search-container'>
          <input
            placeholder={getText('type-to-search')}
            onChange={handleSearch}
          />
        </div>
        <button className='button btn-2' onClick={handleIsSelecting}>
          <img className='lg-icon' src={getIcons('clear')} />
        </button>
      </div>
      {filteredCurrencies.length ? (
        <div className='currency-container'>
          <div className='from-to-preview'>
            {getCurrencyShort(from.short.toLowerCase())}
            {' - '}
            {getCurrencyShort(to.short.toLowerCase())}
          </div>
          {filteredCurrencies.map((item) => {
            return (
              <div
                className={`small-container cursor-pointer no-border ${
                  item.id === userItem.id && 'item-selected'
                }`}
                key={item.name}
                onClick={() => handleSelect(item)}
              >
                <div>
                  {item.flag && (
                    <img className='icons' src={getIcons(item.flag)} />
                  )}
                  <div>{getText(item.short.toLowerCase())}</div>
                </div>
                {item.id === userItem.id && (
                  <div className='selected-message'>{getText('selected')}</div>
                )}
              </div>
            );
          })}
        </div>
      ) : (
        <div className='message-container'>
          <div className='message'>{getText('no-results')}</div>
        </div>
      )}
    </div>
  );
};

function filterCurrencies(array, search) {
  const newCurrencies = array.filter((item) => {
    return item.name.toLowerCase().includes(search.toLowerCase());
  });

  return newCurrencies;
}

export default SelectCurrency;
