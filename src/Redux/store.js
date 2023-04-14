import { createStore, applyMiddleware, combineReducers } from "redux";
import logger from "redux-logger";
import UsersReducer from "./Reducers/Users";
import RankReducer from "./Reducers/Rank";
import LevelsReducer from "./Reducers/Level";

export default createStore(combineReducers({ UsersReducer, RankReducer, LevelsReducer }), applyMiddleware(logger));
