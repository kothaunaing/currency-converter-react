function getTemp(amount, from) {
  let item;

  const units = [
    {
      name: '˚C',
      formulas: {
        '˚F': (9 / 5) * amount + 32,
        K: amount + 273.15,
        '˚C': 1,
      },
    },
    {
      name: '˚F',
      formulas: {
        '˚C': (5 / 9) * (amount - 32),
        K: (5 / 9) * (amount - 32) + 273.15,
        '˚F': 1
      },
    },
    {
      name: 'K',
      formulas: {
        '˚F': (9 / 5) * (amount - 273.15) + 32,
        '˚C': amount - 273.15,
        K: 1
      },
    },
  ];

  units.forEach((u) => {
    if (u.name === from) {
      item = u;
    }
  });

  return item;
}

export default getTemp;

