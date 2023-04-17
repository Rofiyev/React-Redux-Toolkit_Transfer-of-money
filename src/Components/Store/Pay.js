import { createAction } from "@reduxjs/toolkit";
import { randomID } from "create-random-id";
const length = 18;
const type = "letter" || ["letter", "number", "symbol"];

const initialState = {
  pay: [
    { id: randomID(length, type), name: 'Kassa1' },
    { id: randomID(length, type), name: 'Kassa2' },
    { id: randomID(length, type), name: 'Kassa3' },
  ],
}

export const addPay = createAction('ADD_PAY');
export const removePay = createAction('REMOVE_PAY');
export const renamePay = createAction('RENAME_PAY');

export default function PayReducer(state = initialState, action) {
  switch (action.type) {
    case addPay.type:
      return { ...state, pay: [...state.pay, { id: randomID(length, type), name: action.payload }] };

    case removePay.type:
      return { ...state, pay: [...state.pay.filter(data => data.id !== action.payload)] };

    case renamePay.type:
      return { ...state, pay: state.pay.map((data, i) => i === action.payload.id ? ({ id: randomID(length, type), name: action.payload.value }) : data) };

    default:
      return state
  }
};
