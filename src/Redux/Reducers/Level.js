import * as types from '../Types';

const initialState = {
  levels: [
    { id: 1, name: 'Junior', bonus: 10 },
    { id: 2, name: 'Middle', bonus: 20 },
    { id: 3, name: 'Senior', bonus: 30 },
  ]
}

export default function LevelsReducer(state = initialState, action) {
  switch (action.type) {
    case types.ADD_LEVEL:
      state = {
        levels: [
          ...state.levels,
          { id: state.levels + 1, ...action.payload },
        ]
      }
      break;
    case types.REMOVE_LEVEL:
      state = {
        levels: [...state.levels.filter(data => data.id != action.payload)]
      }
      break;
    case types.RENAME_LEVEL:
      const data = [...state.levels];
      data.splice(action.payload.id - 1, 1, { id: action.payload.id, ...action.payload.value });
      state = { levels: [...data] }
      break;
  }

  return state;
}