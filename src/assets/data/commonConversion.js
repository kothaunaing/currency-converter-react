const conversions = [
  {
    name: 'length',
    conversion: [
      {
        name: 'cm to mm',
        from: 'CM',
        to: 'MM',
      },
      {
        name: 'm to cm',
        from: 'M',
        to: 'CM',
      },
      {
        name: 'ft to in',
        from: 'FT',
        to: 'IN',
      },
      {
        name: 'mi to km',
        from: 'MI',
        to: 'KM',
      },
      {
        name: 'm to ft',
        from: 'M',
        to: 'FT',
      },
    ]
  },
  {
    name: 'area',
    conversion: [
      {
        name: 'ha to ac',
        from: 'HA',
        to: 'AC',
      },
    ]
  },
  {
    name: 'time',
    conversion: [
      {
        name: 'h to min',
        from: 'H',
        to: 'MIN',
      },
      {
        name: 'h to s',
        from: 'H',
        to: 'S',
      },
      {
        name: 'y to d',
        from: 'Y',
        to: 'D',
      },
      {
        name: 'y to h',
        from: 'Y',
        to: 'H',
      },
    ]
  },
  {
    name: 'data-storage',
    conversion: [
      {
        name: 'GB to MB',
        from: 'GB',
        to: 'MB',
      },
      {
        name: 'TB to GB',
        from: 'TB',
        to: 'GB',
      },
      {
        name: 'MB to kB',
        from: 'MB',
        to: 'kB',
      },
    ]
  },
  {
    name: 'temperature',
    conversion: [
      {
        name: '˚C to ˚F',
        from: '˚C',
        to: '˚F',
      },
      {
        name: '˚F to ˚C',
        from: '˚F',
        to: '˚C',
      },
      {
        name: '˚C to K',
        from: '˚C',
        to: 'K',
      },
      {
        name: '˚F to K',
        from: '˚F',
        to: 'K',
      },
    ]
  },
  {
    name: 'currency',
    conversion: [
      {
        name: 'USD to MMK',
        from: 'USD',
        to: 'MMK',
      },
      {
        name: 'THB to MMK',
        from: 'THB',
        to: 'MMK',
      },
      {
        name: 'GBP to MMK',
        from: 'GBP',
        to: 'MMK',
      },
      {
        name: 'CNY to JPY',
        from: 'CNY',
        to: 'JPY',
      },
    ]
  },
  {
    name: 'weight',
    conversion: [
      {
        name: 'kg to g',
        from: 'KG',
        to: 'G',
      },
      {
        name: 'kg to lb',
        from: 'KG',
        to: 'LB',
      },
      {
        name: 'ton to kg',
        from: 'TON',
        to: 'KG',
      },
      {
        name: 'lb to oz',
        from: 'LB',
        to: 'OZ',
      },
    ]
  },
]

function getConversion(type) {
  let result = [];

  conversions.forEach((c) => {
    if (type === c.name) {
      result = c.conversion;
    }
  })

  return result;
}

export default getConversion;