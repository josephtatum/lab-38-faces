import { moodReducer } from './moodReducer';

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
    const action = 'DRINK_COFFEE';
    const newState = moodReducer(initState, action);

    expect(newState).toEqual({
      coffees: 1,
      snacks: 0,
      naps: 0,
      studies: 0
    });
  });

  it('can handle EAT_SNACKS', () => {
    const action = 'EAT_SNACKS';
    const newState = moodReducer(initState, action);

    expect(newState).toEqual({
      coffees: 0,
      snacks: 1,
      naps: 0,
      studies: 0
    });
  });

  it('can handle TAKE_NAP', () => {
    const action = 'TAKE_NAP';
    const newState = moodReducer(initState, action);

    expect(newState).toEqual({
      coffees: 0,
      snacks: 0,
      naps: 1,
      studies: 0
    });
  });

  it('can handle STUDY', () => {
    const action = 'STUDY';
    const newState = moodReducer(initState, action);

    expect(newState).toEqual({
      coffees: 0,
      snacks: 0,
      naps: 0,
      studies: 1
    });
  });

  it('returns current state if action not recognized', () => {
    const action = 'SHOP';
    const newState = moodReducer(initState, action);

    expect(newState).toEqual({
      coffees: 0,
      snacks: 0,
      naps: 0,
      studies: 0
    });
  });
});
