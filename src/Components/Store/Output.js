import { createAction } from "@reduxjs/toolkit";
import { randomID } from "create-random-id";

const length = 18;
const type = "letter" || ["letter", "number", "symbol"];

export const addOutput = createAction('ADD_OUTPUT')
export const removeOutput = createAction('REMOVE_OUTPUT')
export const renameOutput = createAction('RENAME_OUTPUT')

const initialState = {
  output: [
    { id: randomID(length, type), name: 'Mark', value: 100, pay: 'Kassa1', date: '2023/02/06' },
    { id: randomID(length, type), name: 'Jacob', value: 200, pay: 'Kassa2', date: '2023/01/11' },
    { id: randomID(length, type), name: 'Otto', value: 100, pay: 'Kassa2', date: '2023/03/13' },
  ],
}

export default function OutputReducer(state = initialState, action) {
  switch (action.type) {
    case addOutput.type:
      return { ...state, output: [...state.output, { id: randomID(length, type), ...action.payload }] };

    case removeOutput.type:
      return { ...state, output: [...state.output.filter(data => data.id !== action.payload)] };

    case renameOutput.type:
      return { ...state, output: state.output.map((data, i) => i === action.payload.id ? ({ id: randomID(length, type), ...action.payload.value }) : data) };

    default:
      return state
  }
}