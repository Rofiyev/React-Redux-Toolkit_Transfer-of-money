import { createAction } from "@reduxjs/toolkit";
import { randomID } from "create-random-id";

const lenght = 18;
const type = 'letter' || ['letter', 'number', 'symbol'];

export const addProceeds = createAction('ADD_PROCEEDS');
export const removeProceeds = createAction('REMOVE_PROCEEDS');
export const renameProceeds = createAction('RENAME_PROCEEDS');

const initialState = {
  proceeds: [
    { id: randomID(lenght, type), name: 'Mark', value: 10000, pay: 'Kassa3', date: '2023/02/30' },
    { id: randomID(lenght, type), name: 'Jacob', value: 3000, pay: 'Kassa2', date: '2023/04/16' },
  ],
}

export default function proceedsReducer(state = initialState, action) {
  switch (action.type) {
    case addProceeds.type:
      return { ...state, proceeds: [...state.proceeds, { id: randomID(lenght, type), ...action.payload }] };

    case removeProceeds.type:
      return { ...state, proceeds: [...state.proceeds.filter(data => data.id !== action.payload)] };

    case renameProceeds.type:
      return { ...state, proceeds: state.proceeds.map((data, i) => i === action.payload.id ? ({ id: randomID(lenght, type), ...action.payload.value }) : data) };

    default:
      return state
  }
}