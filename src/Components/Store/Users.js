import { createAction } from "@reduxjs/toolkit";
import { randomID } from "create-random-id";

const lenght = 18;
const type = 'letter' || ['letter', 'number', 'symbol'];


export const addUser = createAction('ADD_USER');
export const removeUser = createAction('REMOVE_USER');
export const renameUser = createAction('RENAME_USER');

const initialState = {
  users: [
    { id: randomID(lenght, type), name: "Mark", phone: '134532' },
    { id: randomID(lenght, type), name: "Jacob", phone: '437282' },
    { id: randomID(lenght, type), name: "Otto", phone: '3414354' },
  ],
}

export default function UsersReducer(state = initialState, action) {
  switch (action.type) {
    case addUser.type:
      return { ...state, users: [...state.users, { id: randomID(lenght, type), ...action.payload }] };

    case removeUser.type:
      return { ...state, users: [...state.users.filter(data => data.id !== action.payload)] };

    case renameUser.type:
      return { ...state, users: state.users.map((data, i) => i === action.payload.id ? ({ id: randomID(lenght, type), ...action.payload.value }) : data) }

    default:
      return state
  };
}
