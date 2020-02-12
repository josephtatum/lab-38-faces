import { moodReducer } from './moodReducer';
import { drinkCoffee, takeNap, study, eatSnack } from '../actions/moodActions';

describe('moodReducer', () => {

  let initState;
  beforeEach(() => {
    initState = {
      coffees: 0,
      snacks: 0,
      naps: 0,
      studies: 0
    };
  });

  it('can handle DRINK_COFFEE', () => {
    const action = drinkCoffee();
    const newState = moodReducer(action, initState);

    expect(newState).toEqual({
      coffees: 1,
      snacks: 0,
      naps: 0,
      studies: 0
    });
  });

  it('can handle EAT_SNACKS', () => {
    const action = eatSnack();
    const newState = moodReducer(action, initState);

    expect(newState).toEqual({
      coffees: 0,
      snacks: 1,
      naps: 0,
      studies: 0
    });
  });

  it('can handle TAKE_NAP', () => {
    const action = takeNap();
    const newState = moodReducer(action, initState);

    expect(newState).toEqual({
      coffees: 0,
      snacks: 0,
      naps: 1,
      studies: 0
    });
  });

  it('can handle STUDY', () => {
    const action = study();
    const newState = moodReducer(action, initState);

    expect(newState).toEqual({
      coffees: 0,
      snacks: 0,
      naps: 0,
      studies: 1
    });
  });

  it('returns current state if action not recognized', () => {
    const action = { name: 'SHOP' };
    const newState = moodReducer(action, initState);

    expect(newState).toEqual({
      coffees: 0,
      snacks: 0,
      naps: 0,
      studies: 0
    });
  });
});
