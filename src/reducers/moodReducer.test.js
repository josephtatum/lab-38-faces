import { moodReducer } from './moodReducer';

describe('moodReducer can', () => {

  let initState;
  beforeEach(() => {
    initState = {
      coffees: 0,
      snacks: 0,
      naps: 0,
      studies: 0
    };
  });

  it('handle DRINK_COFFEE', () => {
    const action = 'DRINK_COFFEE';
    const newState = moodReducer(action, initState);

    expect(newState).toEqual({
      coffees: 1,
      snacks: 0,
      naps: 0,
      studies: 0
    });
  });

  it('handle EAT_SNACKS', () => {
    const action = 'EAT_SNACK';
    const newState = moodReducer(action, initState);

    expect(newState).toEqual({
      coffees: 0,
      snacks: 1,
      naps: 0,
      studies: 0
    });
  });
});
