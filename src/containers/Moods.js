import React, { Component, useReducer } from 'react';
import { moodReducer } from '../reducers/moodReducer';
import { actions } from '../actions/moodActions';
import Controls from '../components/controls/Controls';
import Face from '../components/face/Face';
export const isTired = state => state.coffees < 1 && state.naps < 1;
export const isHyper = state => state.coffees > 3;
export const isEducated = state => state.studies > 2;
export const isHungry = state => state.snacks < 1;

export const getFace = state => {
  if(isTired(state) && isHungry(state)) return '😠';
  if(isHyper(state) && isHungry(state)) return '😱';
  if(isTired(state)) return '😴';
  if(isHyper(state)) return '🙀';
  if(isEducated(state)) return '😲';
  if(isHungry(state)) return '😡';

  return '😀';
};

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
