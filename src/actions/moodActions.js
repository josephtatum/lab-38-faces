export const actions = [
  { name: 'DRINK_COFFEE', text: 'Drink Coffee', stateName: 'coffees' },
  { name: 'EAT_SNACK', text: 'Snack', stateName: 'snacks' },
  { name: 'TAKE_NAP', text: 'Nap', stateName: 'naps' },
  { name: 'STUDY', text: 'Study', stateName: 'studies' },
];

export const DRINK_COFFEE = 'DRINK_COFFEE';
export const drinkCoffee = () => ({
  name: DRINK_COFFEE,
  text: 'Drink Coffee',
  stateName: 'coffees'
});

export const EAT_SNACK = 'EAT_SNACK';
export const eatSnack = () => ({
  name: EAT_SNACK,
  text: 'Snack',
  stateName: 'snacks'
});

export const TAKE_NAP = 'TAKE_NAP';
export const takeNap = () => ({
  name: TAKE_NAP,
  text: 'Nap',
  stateName: 'naps'
});

export const STUDY = 'STUDY';
export const study = () => ({
  name: STUDY,
  text: 'Study',
  stateName: 'studies'
});
