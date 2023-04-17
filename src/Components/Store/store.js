import { configureStore } from '@reduxjs/toolkit';
import UsersReducer from './Users';
import OutputReducer from './Output';
import PayReducer from './Pay';
import proceedsReducer from './Proceeds';

export default configureStore({
  reducer: { users: UsersReducer, output: OutputReducer, pays: PayReducer, proceeds: proceedsReducer },
})
