import React, { Component, useReducer } from 'react';
import { moodReducer } from '../reducers/moodReducer';
import { actions } from '../actions/moodActions';
import Controls from '../components/controls/Controls';
import Face from '../components/face/Face';
import { getFace } from '../selectors/moodSelectors';

export const Moods = () => {
  const [state, dispatch] = useReducer(moodReducer, { coffees: 0, naps: 0, studies: 0, snacks: 0 });
  const face = getFace(state);
  const controlActions = actions.map(action => ({
    ...action,
    count: state[action.stateName]
  }));

  return (
    <>
      <Controls actions={controlActions} handleSelection={dispatch} state={state} />
      <Face emoji={face} />
    </>
  );
};
