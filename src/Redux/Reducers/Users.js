import * as types from '../Types'

const initialState = {
  users: [
    { id: 1, firstName: 'Mark', lastName: 'Otto', phone: '12345', runk: "Teamleader", level: 'Senior' },
    { id: 2, firstName: 'Jacob', lastName: 'Throton', phone: '32367', runk: 'Developer', level: 'Middle' },
    { id: 3, firstName: 'Larry', lastName: 'theBid', phone: '743134', runk: 'Developer', level: 'Junior' },
  ],

}

export default function UsersReducer(state = initialState, action) {
  switch (action.type) {
    case types.ADD_USER:
      state = {
        users: [...state.users, { id: state.users.length + 1, ...action.payload }]
      }
      break;
    case types.REMOVE_USER:
      state = {
        users: [...state.users.filter(data => data.id !== action.payload)]
      }
      break;
    case types.RENAME_USER:
      const data = [...state.users];
      data.splice(action.payload.id - 1, 1, { id: action.payload.id, ...action.payload.value });
      state = {
        users: [...data]
      }
      break;
  }


  return state;

}