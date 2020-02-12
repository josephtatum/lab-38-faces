import moodReducer from './moodReducer';

describe('moodReducer can', () => {

  it('handle DRINK_COFFEE'), () => {
    
    const action = 'DRINK_COFFEE';
    const initState = {};
    const newState = moodReducer(action, initState);

    expect(newState).toEqual();
  };
});
