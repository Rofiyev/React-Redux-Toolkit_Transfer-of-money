import * as types from '../Types';

const initialState = {
  runks: [
    { id: 1, name: 'Teamleader', salary: 2000 },
    { id: 2, name: 'Manager', salary: 1500 },
    { id: 3, name: 'Developer', salary: 1000 },
  ],

}

export default function RankReducer(state = initialState, action) {
  switch (action.type) {
    case types.ADD_RUNK:
      state = {
        runks: [
          ...state.runks,
          { id: state.runks.length + 1, ...action.payload }
        ]
      }
      break;

    case types.REMOVE_RUNK:
      state = {
        runks: [...state.runks.filter(data => data.id != action.payload)]
      }
      break;

    case types.RENAME_RUNK:
      const data = [...state.runks];
      data.splice(action.payload.id - 1, 1, { id: action.payload.id, ...action.payload.value });
      state = { runks: [...data] }
      break;
  }

  return state;
}